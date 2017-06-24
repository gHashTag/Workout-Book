import {
  GET_COMPLETED_WORKOUTS_LIST,
  GET_LAST_WORKOUT,
  TOGGLE_MAIN_SCREEN
} from '../actions/ActionTypes';


const ui = (state = {hiddenMainScreen: false}, action) => {
  switch(action.type){
    case TOGGLE_MAIN_SCREEN:
       return Object.assign({}, state, {hiddenMainScreen: !state.hiddenMainScreen});
    default:
      return state;
  }
}

export default ui
