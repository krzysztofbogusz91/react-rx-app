import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';

class App extends Component {
  state = {
    team: [],
  };


  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.header}> Gather the team before setting off </h1>
      </div>
    );
  }
}

export { App as AppUnwrapped };
export default hot(module)(App);
