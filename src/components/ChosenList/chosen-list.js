import React from 'react';
import PropTypes from 'prop-types';
import './chosen-list.scss';
import Hero from '../Hero/hero';

function ChosenList(props) {
  const { chosenList } = props;
  const chosenHeroes = chosenList
    .map((person, id) => (<Hero key={`hero${id + 1}`} isChosen={1} person={person} />));

  return (
    <div className="chosen_list_container">
      <ul className="chosen_list">
        {chosenHeroes.length > 0 ? chosenHeroes
          : (<li><h2 style={{ marginTop: '20px' }}>No one chosen...</h2></li>)}
      </ul>
    </div>
  );
}
ChosenList.propTypes = {
  chosenList: PropTypes.arrayOf(PropTypes.object),
};
ChosenList.defaultProps = {
  chosenList: [],
};

export default ChosenList;
