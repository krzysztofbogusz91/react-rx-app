import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';
import Main from '../Main/main';

class App extends Component {
  state = {
    team: [],
    list: [],
  };

  render() {
    return (
      <div className={styles.app}>
        <Main listOfHeroes={this.state.list} team={this.state.team} />
      </div>
    );
  }
}

export { App as AppUnwrapped };
export default hot(module)(App);
