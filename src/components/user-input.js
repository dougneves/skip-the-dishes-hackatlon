import React, { Component } from 'react';
import { validadeLatLonValue } from '../utils/tools';
import { connect } from 'react-redux';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { fetchData } from '../actions/fetch-data';

class UserInput extends Component {
  state = {
    latitude: '',
    longitude: '',
    latitudeError: true,
    longitudeError: true
  };

  onInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
      [`${name}Error`]: !validadeLatLonValue(value)
    });
  };

  fetchData = () => {
    const { latitude, longitude } = this.state;
    this.props.dispatch(fetchData({ latitude, longitude }));
  };

  render = () => {
    return (
      <Container>
        <Row>Type the Latitude and Longitude to start the search:</Row>
        <Row>
          <Col>
            <Input
              label="Latitude"
              name="latitude"
              onChange={this.onInputChange}
              value={this.state.latitude}
            />
            {this.state.latitudeError && <div>invalid number</div>}
          </Col>
          <Col>
            <Input
              label="Longitude"
              name="longitude"
              onChange={this.onInputChange}
              value={this.state.longitude}
            />
            {this.state.longitudeError && <div>invalid number</div>}
          </Col>
          <Col>
            <Button
              disabled={this.state.latitudeError || this.state.longitudeError}
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

export default connect()(UserInput);
