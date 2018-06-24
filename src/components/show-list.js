import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'mdbreact';
import { fetchData } from '../actions/fetch-data';

const DEFAULT_STATE = {
  showNextPage: false,
  currentPage: 0,
  pageStartIndex: 0
};

class ShowList extends Component {
  state = { ...DEFAULT_STATE };

  renderList = list =>
    list.map((item, index) => (
      <ListGroupItem key={index} className="animated fadeIn">
        {item.name}
      </ListGroupItem>
    ));

  componentWillReceiveProps = nextProps => {
    if (nextProps.fetchData.list.length === 0)
      this.setState({ ...DEFAULT_STATE });
    if (nextProps.fetchData.fetching) this.setState({ showNextPage: false });
    if (nextProps.fetchData.fetched && nextProps.fetchData.haveMoreItens) {
      if (
        nextProps.fetchData.list.length <
        nextProps.config.itensPerPage * (this.state.currentPage + 1)
      )
        this.getData();
      else {
        this.setState({ showNextPage: true });
      }
    }
  };

  getData = () => {
    this.props.dispatch(
      fetchData({
        itensPerCall: this.props.config.itensPerCall,
        itensPerPage: this.props.config.itensPerPage
      })
    );
  };

  goToNextPage = () => {
    this.setState({
      showNextPage:
        this.props.fetchData.list.length >
          this.props.config.itensPerPage * (this.state.currentPage + 2) ||
        this.props.fetchData.haveMoreItens,
      currentPage: this.state.currentPage + 1,
      pageStartIndex:
        (this.state.currentPage + 1) * this.props.config.itensPerPage
    });
    if (
      this.props.fetchData.list.length <
      this.props.config.itensPerPage * (this.state.currentPage + 2)
    )
      this.getData();
  };

  goToPreviousPage = () => {
    this.setState({
      showNextPage: true,
      currentPage: this.state.currentPage - 1,
      pageStartIndex: this.state.pageStartIndex - this.props.config.itensPerPage
    });
  };

  render = () => {
    if (this.props.fetchData.list.length === 0) return <Container />;
    return (
      <Container>
        <Row>
          <Col>
            Showing itens from {this.state.pageStartIndex + 1} to{' '}
            {this.state.pageStartIndex + this.props.config.itensPerPage >
            this.props.fetchData.list.length
              ? this.props.fetchData.list.length
              : this.state.pageStartIndex + this.props.config.itensPerPage}
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.fetchData.list.length} itens in store right now
            {this.props.fetchData.fetching &&
              ', and loading more in background...'}
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.currentPage > 0 && (
              <Button className="float-left" onClick={this.goToPreviousPage}>
                previous
              </Button>
            )}
          </Col>
          <Col>{this.props.fetchData.fetching && <div>loading...</div>}</Col>
          <Col>
            {this.state.showNextPage && (
              <Button className="float-right" onClick={this.goToNextPage}>
                next
              </Button>
            )}
          </Col>
        </Row>
        <ListGroup>
          {this.renderList(
            this.props.fetchData.list.slice(
              this.state.pageStartIndex,
              this.state.pageStartIndex + this.props.config.itensPerPage
            )
          )}
        </ListGroup>
        <Row>
          <Col>
            {this.state.currentPage > 0 && (
              <Button className="float-left" onClick={this.goToPreviousPage}>
                previous
              </Button>
            )}
          </Col>
          <Col>{this.props.fetchData.fetching && <div>loading...</div>}</Col>
          <Col>
            {this.state.showNextPage && (
              <Button className="float-right" onClick={this.goToNextPage}>
                next
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    );
  };
}

export default connect(state => {
  return { fetchData: state.fetchData, config: state.config };
})(ShowList);
