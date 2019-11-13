import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/hero';

function HeroList(props) {
  const heroesList = props.heroesList.map(person =>
    (<Hero person={person} />));
  return (
    <div>
      <ul>{heroesList}</ul>
    </div>);
}
HeroList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.object),
};
HeroList.defaultProps = {
  heroesList: [],
};

export default HeroList;

