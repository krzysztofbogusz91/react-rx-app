import React, { Component } from 'react';
import './style.scss';
import Main from '../Main/main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      list: [],
    };
  }

  render() {
    const { list, team } = this.state;
    return (
      <div className="app">
        <Main listOfHeroes={list} team={team} />
      </div>
    );
  }
}

export default App;
