import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/hero';
import style from './hero-list.scss';

function HeroList(props) {
  const heroesList = props.heroesList
    .map((hero, id) => ({ ...hero, img: `https://i.pravatar.cc/200?img=${id + 1}` }))
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

