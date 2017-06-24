import {
  GET_COMPLETED_WORKOUTS_LIST,
  GET_LAST_WORKOUT
} from '../actions/ActionTypes';


const workouts = (state = [], action) => {
  switch(action.type){
    case GET_COMPLETED_WORKOUTS_LIST:
       return action.workouts;
    case GET_LAST_WORKOUT:
       return action.lastWorkout;
    default:
       return state
  }
}

export default workouts
