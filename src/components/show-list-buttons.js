import React from 'react';
import { Row, Col, Button } from 'mdbreact';

export default props => (
  <Row>
    <Col>
      {props.currentPage > 0 && (
        <Button className="float-left" onClick={props.goToPreviousPage}>
          previous
        </Button>
      )}
    </Col>

    <Col>
      {props.showNextPage && (
        <Button className="float-right" onClick={props.goToNextPage}>
          next
        </Button>
      )}
    </Col>
  </Row>
);
