import React, { Component } from 'react';
import './app.css';
import PeopleContainer from '../who/who';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header clearfix">
          <h1>Guess Who</h1>
        </div>
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
