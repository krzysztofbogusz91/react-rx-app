import React from 'react';
import PropTypes from 'prop-types';
import ChosenList from '../ChosenList/chosen-list';
import HeroList from '../HeroList/hero-list';
import SearchBar from '../SearchBar/search-bar';
import Header from '../Header/header';
import styles from './main.scss';

function Main(props) {
  return (
    <div className={styles.main_view}>
      <Header />
      <SearchBar />
      <HeroList heroesList={props.listOfHeroes} />
      <ChosenList chosenList={props.team} />
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

