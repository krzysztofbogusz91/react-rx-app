import 'babel-polyfill';
import { fromFetch } from 'rxjs/fetch';
import {
  switchMap,
  map,
  tap,
  flatMap,
} from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import 'rxjs/add/observable/of';

import { ADD_TO_CHOSEN, REMOVE_FROM_CHOSEN, FETCH_HEROES_SUCCESS } from './types';

const fetchUrl = 'https://swapi.co/api/people/';
const imgUrl = 'https://i.pravatar.cc/200?img=';

export const addHero = (hero) => ({ type: ADD_TO_CHOSEN, hero });
export const removeHero = (hero) => ({ type: REMOVE_FROM_CHOSEN, hero });
export const getHeros = (heros) => ({ type: FETCH_HEROES_SUCCESS, heros });


const getWorlds = (list) => forkJoin(list.map((hero) => fromFetch(hero.homeworld)
  .pipe(
    switchMap((resp) => resp.json()),
    map((resp) => ({ ...hero, homeworld: resp.name })),
  )));

const getSpecies = (list) => forkJoin(list.map((hero) => fromFetch(hero.species[0])
  .pipe(
    switchMap((resp) => resp.json()),
    map((resp) => ({ ...hero, species: [resp.name] })),
  )));

const addHeroPicture = (heroes) => heroes.map((hero, id) => ({ ...hero, img: `${imgUrl}${id + 1}` }));

export const getHeroesAction = () => (dispatch) => fromFetch(fetchUrl)
  .pipe(
    switchMap((response) => response.json()),
    map((response) => response.results),
    flatMap((response) => getWorlds(response)),
    flatMap((response) => getSpecies(response)),
    map((response) => addHeroPicture(response)),
    tap((completeHeroes) => dispatch(getHeros(completeHeroes))),
  );
