import React from 'react';
import PropTypes from 'prop-types';

function HeroList(props) {
  return (
    <div>
      <ul>{props.heroesList}</ul>
    </div>);
}
HeroList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.object),
};
HeroList.defaultProps = {
  heroesList: [],
};

export default HeroList;

