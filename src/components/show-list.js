import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'mdbreact';

class ShowList extends Component {
  renderList = list =>
    list.map(item => (
      <ListGroupItem className="animated fadeIn">{item.name}</ListGroupItem>
    ));

  render = () => {
    return (
      <Container>
        <Row>
          <Col>Results:</Col>
        </Row>
        {this.props.fetchData.fetching ? (
          <div>loading...</div>
        ) : (
          <ListGroup>{this.renderList(this.props.fetchData.list)}</ListGroup>
        )}
      </Container>
    );
  };
}

export default connect(state => {
  return { fetchData: state.fetchData };
})(ShowList);
