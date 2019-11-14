import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      <div className={styles.main_view_list_container}>
        <HeroList heroesList={props.listOfHeroes} />
        <ChosenList chosenList={props.team} />
      </div>
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

const mapStateToProps = state => ({ team: state.team });

export default connect(mapStateToProps)(Main);

