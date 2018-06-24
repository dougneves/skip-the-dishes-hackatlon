import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { fetchData } from '../actions/fetch-data';
import { isValidPositiveInteger } from '../utils/tools';

class UserInput extends Component {
  state = {
    call: '',
    page: '',
    callError: true,
    pageError: true
  };

  onInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
      [`${name}Error`]: !isValidPositiveInteger(value)
    });
  };

  fetchData = () => {
    const call = Number.parseInt(this.state.call, 10);
    const page = Number.parseInt(this.state.page, 10);
    if (call > page)
      return window.alert('itens per page must be greater then itens per call');
    this.props.dispatch(
      fetchData({ itensPerCall: call, itensPerPage: page, clearData: true })
    );
  };

  render = () => {
    return (
      <Container>
        <Row>
          Type how many itens per API call do you want to fetch, and how many
          itens per page:
        </Row>
        <Row>
          <Col>
            <Input
              label="Itens per call"
              name="call"
              onChange={this.onInputChange}
              value={this.state.call}
            />
            {this.state.callError && <div>invalid number</div>}
          </Col>
          <Col>
            <Input
              label="Itens per page"
              name="page"
              onChange={this.onInputChange}
              value={this.state.page}
            />
            {this.state.pageError && <div>invalid number</div>}
          </Col>
          <Col>
            <Button
              disabled={
                this.state.callError ||
                this.state.pageError ||
                this.props.fetchData.fetching
              }
              onClick={this.fetchData}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default connect(state => {
  return { fetchData: state.fetchData };
})(UserInput);
