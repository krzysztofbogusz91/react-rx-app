import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/hero';
import style from './hero-list.scss';

function HeroList(props) {
  const heroesList = props.heroesList
    .map(person =>
      (<Hero person={person} />));
  return (
    <div className={style.hero_list_container}>
      <ul className={style.hero_list}>{heroesList}</ul>
    </div>);
}
HeroList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.object),
};
HeroList.defaultProps = {
  heroesList: [],
};

export default HeroList;

