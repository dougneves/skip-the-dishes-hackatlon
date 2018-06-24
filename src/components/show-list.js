import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';
import { fetchData } from '../actions/fetch-data';

class ShowList extends Component {
  renderList = list =>
    list.map((item, index) => (
      <ListGroupItem key={index} className="animated fadeIn">
        {index} {item.name}
      </ListGroupItem>
    ));

  componentWillReceiveProps = nextProps => {
    if (nextProps.fetchData.fetched && nextProps.fetchData.haveMoreItens) {
      if (nextProps.fetchData.list.length < nextProps.config.itensPerPage)
        this.props.dispatch(
          fetchData({
            itensPerCall: this.props.config.itensPerCall,
            itensPerPage: this.props.config.itensPerPage
          })
        );
    }
  };

  render = () => {
    return (
      <Container>
        <Row>
          <Col>
            Results ({this.props.fetchData.list.length}
            {this.props.fetchData.fetching && ' and loading...'}):
          </Col>
        </Row>
        <ListGroup>{this.renderList(this.props.fetchData.list)}</ListGroup>
        {this.props.fetchData.fetching && <div>loading...</div>}
      </Container>
    );
  };
}

export default connect(state => {
  return { fetchData: state.fetchData, config: state.config };
})(ShowList);
