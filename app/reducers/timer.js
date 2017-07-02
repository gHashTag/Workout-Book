import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER
} from '../actions/ActionTypes';

const initialState = {
  startedAt: undefined,
  stoppedAt: undefined
}

const timer = (state = initialState, action) => {
  switch(action.type){
    case START_TIMER:
        return {
          startedAt: action.time,
          stoppedAt: state.stoppedAt
        };
    case STOP_TIMER:
        return {
          startedAt: state.startedAt,
          stoppedAt: action.time
        };
    default:
        return state;
  }
}

export default timer
