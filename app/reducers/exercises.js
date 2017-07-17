import {
  SELECT_EXERCISE
} from '../actions/ActionTypes';

const initialState = {
  ids: []
}

const exercises = (state = initialState, action) => {
  switch(action.type){
    case SELECT_EXERCISE:
      return Object.assign({}, state, {
        ids: [
          ...state.ids,
          action.id
        ]
      })
    default:
      return state;
  }
}

export default exercises;
