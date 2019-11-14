export const ADD_TO_CHOSEN = 'ADD_TO_CHOSEN';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';

export const addHero = hero => ({ type: ADD_TO_CHOSEN, hero });
export const getHeros = heros => ({ type: FETCH_HEROES_SUCCESS, heros });

export const getHeroes = () => dispatch =>
  fetch('https://swapi.co/api/people/')
    .then(resp => resp.json())
    .then((listOfHeroes) => {
      dispatch(getHeros(listOfHeroes.results
        .map((hero, id) => ({ ...hero, img: `https://i.pravatar.cc/200?img=${id + 1}` }))));
    }, err => err)
    .catch(err => err);

