import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';
import Main from '../Main/main';

class App extends Component {
  state = {
    team: [],
    list: [],
  };
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(resp => resp.json())
      .then((listOfHeroes) => {
        console.log(listOfHeroes);
        this.setState({ list: listOfHeroes.results });
      }, (err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
