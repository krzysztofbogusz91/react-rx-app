import React from 'react';
import PropTypes from 'prop-types';

function Hero(props) {
  const spices = props.person.species.map(spi => (<li key={spi}>{spi}</li>));
  return (
    <li key={props.person.created}>
      <img src="https://via.placeholder.com/200/810b14" alt="hero_avatar" />
      <div>
       Name: {props.person.name}
      </div>
      <div>
       Home World: {props.person.homeworld}
      </div>
      <div>
       Hair Color: {props.person.hair_color}
      </div>
      <div>
          Species:
        <ul>
          { spices }
        </ul>
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
};

Hero.defaultProps = {
  person: {
    img: 'https://via.placeholder.com/200/810b14',
    species: [],
  },
};
export default Hero;

