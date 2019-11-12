import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';

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
    const heroesList = this.state.list.map(person => (<li key={person.created}>{person.name}</li>));
    const chosenList = this.state.team.map(person => (<li key={person.created}>{person.name}</li>));
    return (
      <div className={styles.app}>
        <h1 className={styles.header}> Gather the team before setting off </h1>
        <div>
          <label htmlFor="hero-inputs"> Search for heroes: <input /> </label>    
        </div>
        <ul>
          {heroesList}
        </ul>
        <ul>
          {chosenList.length > 0 ? chosenList : (<h2>No one chosen...</h2>)}
        </ul>
      </div>
    );
  }
}

export { App as AppUnwrapped };
export default hot(module)(App);
