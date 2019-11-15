import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './hero.scss';
import { addHero, removeHero } from '../../actions/actions';


function Hero(props) {
  function handleClickAdd() {
    props.addHero(props.person);
  }
  function handleClickRemove() {
    props.removeHero(props.person);
  }
  const image = <img src={props.person.img} alt="hero_avatar" />;
  const spices = props.person.species
    .map(spi => (<li className='spi' key={spi}> - {spi}</li>));
  return (
    <li key={props.person.created} className='hero'>
      <div className='img_container'>
        <div className='hero_img'>
          {image}
        </div>
      </div>
      <div className='info_container'>
        <div className='hero_name'>
        Name: {props.person.name}
        </div>
        <div>
          <span>Home World: {props.person.homeworld} </span>
        </div>
        <div>
        Hair Color: {props.person.hair_color}
        </div>
        <div>
            Specie:
          <ul className='spi_list'>
            { spices }
          </ul>
        </div>
        <div>
          {!props.isChosen ?
            <button className='btn_add' href="#" onClick={handleClickAdd}> Add to list...</button> :
            <button className='btn_remove' href="#" onClick={handleClickRemove}> Remove from list...</button>
        }
        </div>
      </div>
    </li>);
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

const mapDispatchToProps = dispatch => ({
  addHero: hero => dispatch(addHero(hero)),
  removeHero: hero => dispatch(removeHero(hero)),
});

export default connect(null, mapDispatchToProps)(Hero);

