import React from 'react';
import PropTypes from 'prop-types';
import style from './chosen-list.scss';
import Hero from '../Hero/hero';

function ChosenList(props) {
  const chosenHeroes = props.chosenList
    .map((hero, id) => ({ ...hero, img: `https://i.pravatar.cc/200?img=${id + 1}` }))
    .map(person =>
      (<Hero person={person} />));

  return (
    <div className={style.chosen_list_container}>
      <ul className={style.chosen_list}>
        {chosenHeroes.length > 0 ? chosenHeroes :
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

