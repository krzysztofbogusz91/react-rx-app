import React from 'react';
import PropTypes from 'prop-types';
import ChosenList from '../ChosenList/chosen-list';
import HeroList from '../HeroList/hero-list';
import SearchBar from '../SearchBar/search-bar';
import Header from '../Header/header';

function Main(props) {
  const heroesList = props.listOfHeroes.map(person =>
    (<li key={person.created}>{person.name}</li>));
  const chosenList = props.team.map(person => (<li key={person.created}>{person.name}</li>));

  return (
    <div>
      <Header />
      <SearchBar />
      <HeroList heroesList={heroesList} />
      <ChosenList chosenList={chosenList} />
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

