import React, { Component } from 'react';
import { Container } from 'mdbreact';

import UserInput from './components/user-input';
import ShowList from './components/show-list';

class App extends Component {
  render() {
    return (
      <Container>
        <UserInput />
        <ShowList />
      </Container>
    );
  }
}

export default App;
