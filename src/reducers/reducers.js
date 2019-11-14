import { ADD_TO_CHOSEN, FETCH_HEROES_SUCCESS } from '../actions/actions';

const initalState = {
  team: [],
  list: [],
};
const heroApp = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CHOSEN:
      return ({
        ...state,
        team: [...state.team, action.hero],
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
