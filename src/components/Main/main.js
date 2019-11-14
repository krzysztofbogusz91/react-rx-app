import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChosenList from '../ChosenList/chosen-list';
import HeroList from '../HeroList/hero-list';
import SearchBar from '../SearchBar/search-bar';
import Header from '../Header/header';
import styles from './main.scss';
import { getHeroes } from '../../actions/actions';

function Main(props) {
  props.getHeroes().then(() => {
  });
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
  getHeroes: PropTypes.func,
};
Main.defaultProps = {
  listOfHeroes: [],
  team: [],
  getHeroes: null,
};

const mapStateToProps = state => ({ team: state.team, listOfHeroes: state.list });

const mapDispatchToProps = dispatch => ({
  getHeroes: () => dispatch(getHeroes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

