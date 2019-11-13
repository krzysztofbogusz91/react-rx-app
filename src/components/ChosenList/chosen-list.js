import React from 'react';
import PropTypes from 'prop-types';

function ChosenList(props) {
  return (
    <div>
      <ul>
        {props.chosenList.length > 0 ? props.chosenList : <h2>No one chosen...</h2>}
      </ul>
    </div>);
}
ChosenList.propTypes = {
  chosenList: PropTypes.arrayOf(PropTypes.object),
};
ChosenList.defaultProps = {
  chosenList: [],
};

export default ChosenList;

