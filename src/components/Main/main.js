import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Main(props) {
  const heroesList = props.listOfHeroes.map(person =>
    (<li key={person.created}>{person.name}</li>));
  const chosenList = props.team.map(person => (<li key={person.created}>{person.name}</li>));

  return (
    <div>
      <h1 className="header"> Gather the team before setting off </h1>
      <div>
        <label htmlFor="hero-inputs">
            Search for heroes: <input />
        </label>
      </div>
      <ul>{heroesList}</ul>
      <ul>
        {chosenList.length > 0 ? chosenList : <h2>No one chosen...</h2>}
      </ul>
    </div>);
}
Main.propTypes = {
  listOfHeroes: PropTypes.arrayOf(PropTypes.object),
  team: PropTypes.arrayOf(PropTypes.object),
};
Main.defaultProps = {
  listOfHeroes: [],
  team: [],
};

export default Main;

