import React from 'react';
import PropTypes from 'prop-types';
import style from './chosen-list.scss';

function ChosenList(props) {
  return (
    <div className={style.chosen_list_container}>
      <ul className={style.chosen_list}>
        {props.chosenList.length > 0 ? props.chosenList :
        (<li><h2 style={{ marginTop: '20px' }}>No one chosen...</h2></li>)}
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

