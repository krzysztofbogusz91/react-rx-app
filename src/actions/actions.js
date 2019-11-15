import 'babel-polyfill';

export const ADD_TO_CHOSEN = 'ADD_TO_CHOSEN';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const REMOVE_FROM_CHOSEN = 'REMOVE_FROM_CHOSEN';

export const addHero = hero => ({ type: ADD_TO_CHOSEN, hero });
export const removeHero = hero => ({ type: REMOVE_FROM_CHOSEN, hero });
export const getHeros = heros => ({ type: FETCH_HEROES_SUCCESS, heros });

const getWorlds = list => Promise.all(list.map(async (hero) => {
  const world = await fetch(hero.homeworld).then(resp => resp.json());
  return { ...hero, homeworld: world.name };
}));

export const getHeroes = () => dispatch =>
  fetch('https://swapi.co/api/people/')
    .then(resp => resp.json())
    .then(async (listOfHeroes) => {
      const herosWihtHome = await getWorlds(listOfHeroes.results);
      dispatch(getHeros(herosWihtHome
        .map((hero, id) => ({ ...hero, img: `https://i.pravatar.cc/200?img=${id + 1}` }))));
    }, err => err)
    .catch(err => err);

