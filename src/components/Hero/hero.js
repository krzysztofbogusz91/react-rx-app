import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './hero.scss';
import { addHero, removeHero } from '../../actions';


export function Hero(props) {
  const { person, isChosen } = props;

  function handleClickAdd() {
    props.addHero(person);
  }

  function handleClickRemove() {
    props.removeHero(person);
  }

  const image = <img src={person.img} alt="hero_avatar" />;
  const spices = person.species
    .map((spi) => (<li className="spi" key={spi}> - {spi}</li>));

  return (
    <li key={person.created} className="hero">
      <div className="img_container">
        <div className="hero_img">
          {image}
        </div>
      </div>
      <div className="info_container">
        <div className="hero_name">
        Name: {person.name}
        </div>
        <div>
          <span>Home World: {person.homeworld} </span>
        </div>
        <div>
        Hair Color: {person.hair_color}
        </div>
        <div>
            Specie:
          <ul className="spi_list">
            { spices }
          </ul>
        </div>
        <div>
          {!isChosen
            ? <button type="button" className="btn_add" href="#" onClick={handleClickAdd}> Add to list...</button>
            : <button type="button" className="btn_remove" href="#" onClick={handleClickRemove}> Remove from list...</button>}
        </div>
      </div>
    </li>
  );
}

Hero.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    created: PropTypes.string,
    homeworld: PropTypes.string,
    hair_color: PropTypes.string,
    species: PropTypes.arrayOf(PropTypes.string),
  }),
  addHero: PropTypes.func,
  removeHero: PropTypes.func,
  isChosen: PropTypes.number,
};

Hero.defaultProps = {
  person: {
    img: '',
    species: [],
  },
  addHero: null,
  removeHero: null,
  isChosen: 0,
};

const mapDispatchToProps = (dispatch) => ({
  addHero: (hero) => dispatch(addHero(hero)),
  removeHero: (hero) => dispatch(removeHero(hero)),
});

export default connect(null, mapDispatchToProps)(Hero);
