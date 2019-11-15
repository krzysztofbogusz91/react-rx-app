import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/hero';
import './hero-list.scss';

function HeroList(props) {
  const heroesList = props.heroesList
    .map((person, id) =>
      (<Hero key={`hero${id + 1}`} isChosen={0} person={person} />));
  return (
    <div className='hero_list_container'>
      <ul className='hero_list'>{heroesList}</ul>
    </div>);
}
HeroList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.object),
};
HeroList.defaultProps = {
  heroesList: [],
};

export default HeroList;

