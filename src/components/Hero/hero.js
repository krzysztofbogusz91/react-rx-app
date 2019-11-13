import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero.scss';

function Hero(props) {
  const image = <img src={props.person.img} alt="hero_avatar" />;
  const spices = props.person.species
    .map(spi => (<li className={styles.spi} key={spi}> - {spi}</li>));
  return (
    <li key={props.person.created} className={styles.hero}>
      <div className={styles.img_container}>
        <div className={styles.hero_img}>
          {image}
        </div>
      </div>
      <div className={styles.info_container}>
        <div className={styles.hero_name}>
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
          <ul className={styles.spi_list}>
            { spices }
          </ul>
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
};

Hero.defaultProps = {
  person: {
    img: '',
    species: [],
  },
};
export default Hero;

