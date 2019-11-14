import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './hero.scss';
import { addHero } from '../../actions/actions';


function Hero(props) {
  function handleClick() {
    props.addHero(props.person);
  }
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
        <button href="#" onClick={handleClick}> Add to list...</button>
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
};

Hero.defaultProps = {
  person: {
    img: '',
    species: [],
  },
  addHero: null,
};

const mapDispatchToProps = dispatch => ({
  addHero: hero => dispatch(addHero(hero)),
});

export default connect(null, mapDispatchToProps)(Hero);

