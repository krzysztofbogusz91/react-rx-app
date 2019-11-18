import { ADD_TO_CHOSEN, FETCH_HEROES_SUCCESS, REMOVE_FROM_CHOSEN } from '../actions/actions';

const initialState = {
  team: [],
  list: [],
};
const heroApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CHOSEN:
      return ({
        ...state,
        list: state.list.filter((hero) => hero.name !== action.hero.name),
        team: [...state.team, action.hero],
      });
    case REMOVE_FROM_CHOSEN:
      return ({
        ...state,
        list: [action.hero, ...state.list],
        team: state.team.filter((hero) => hero.name !== action.hero.name),
      });
    case FETCH_HEROES_SUCCESS:
      return ({
        ...state,
        list: action.heros,
      });
    default:
      return state;
  }
};

export default heroApp;
