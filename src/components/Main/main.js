import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChosenList from '../ChosenList/chosen-list';
import HeroList from '../HeroList/hero-list';
import SearchBar from '../SearchBar/search-bar';
import Header from '../Header/header';
import './main.scss';
import { getHeroesAction } from '../../actions';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

class Main extends Component {
  constructor() {
    super();
    this.search$ = new Subject();
    this.search = this.search$.asObservable().pipe(
      debounceTime(500),
    );
  }

  componentDidMount() {
    const { getHeroes } = this.props;
    getHeroes().subscribe();
    this.search.subscribe((text) => {
      console.log(text);
    });
  }

  onSearch = (e) => {
    this.search$.next(e.target.value);
  }

  render() {
    const { listOfHeroes, team } = this.props;
    return (
      <div className="main_view">
        <Header />
        <SearchBar onSearch={this.onSearch} />
        <div className="main_view_list_container">
          <HeroList heroesList={listOfHeroes} />
          <ChosenList chosenList={team} />
        </div>
      </div>
    );
  }
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

const mapStateToProps = (state) => ({ team: state.team, listOfHeroes: state.list });

const mapDispatchToProps = (dispatch) => ({
  getHeroes: () => dispatch(getHeroesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
