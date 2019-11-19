import 'babel-polyfill';
import { ADD_TO_CHOSEN, REMOVE_FROM_CHOSEN, FETCH_HEROES_SUCCESS } from './types';

export const addHero = (hero) => ({ type: ADD_TO_CHOSEN, hero });
export const removeHero = (hero) => ({ type: REMOVE_FROM_CHOSEN, hero });
export const getHeros = (heros) => ({ type: FETCH_HEROES_SUCCESS, heros });


const getWorlds = (list) => Promise.all(list.map(async (hero) => {
  const world = await fetch(hero.homeworld).then((resp) => resp.json());
  return { ...hero, homeworld: world.name };
}));

const getSpecies = (list) => Promise.all(list.map(async (hero) => {
  const species = await (Promise.all(hero.species.map(async (spicie) => {
    const spi = await fetch(spicie).then((resp) => resp.json());
    return spi.name;
  })));

  return { ...hero, species: [...species] };
}));

export const getHeroesAction = () => (dispatch) => fetch('https://swapi.co/api/people/')
  .then((resp) => resp.json())
  .then(async (listOfHeroes) => {
    const herosWithHome = await getWorlds(listOfHeroes.results);
    const herosWithSpecies = await getSpecies(herosWithHome);
    dispatch(getHeros(herosWithSpecies
      .map((hero, id) => ({ ...hero, img: `https://i.pravatar.cc/200?img=${id + 1}` }))));
  }, (err) => err)
  .catch((err) => err);
