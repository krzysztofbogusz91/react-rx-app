import React, { Component } from 'react';
import './style.scss';
import Main from '../Main/main';

const RxPopupComponent = () => (
  <div className="popup">
    1`m rx popup!
  </div>
);

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
        <RxPopupComponent />
        <Main listOfHeroes={list} team={team} />
      </div>
    );
  }
}

export default App;
