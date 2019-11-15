import React, { Component } from 'react';
import './style.scss';
import Main from '../Main/main';

class App extends Component {
  state = {
    team: [],
    list: [],
  };

  render() {
    return (
      <div className='app'>
        <Main listOfHeroes={this.state.list} team={this.state.team} />
      </div>
    );
  }
}

export default App;
