'use strict'

import {
  GET_COMPLETED_WORKOUTS_LIST,
  GET_LAST_WORKOUT
} from './ActionTypes'

import axios from 'axios';

export function getCompletedWorkouts(){
  return dispatch => {
    axios.get('https://sheltered-reef-18314.herokuapp.com/api/workouts')
    .then(res => {
      dispatch(getCompletedWorkoutsAsync(res.data));
    });
  }
}

export function getLastWorkout(){
  return dispatch => {
    axios.get('https://sheltered-reef-18314.herokuapp.com/api/lastworkout/')
    .then(res => {
      dispatch(getlastWorkoutAction(res.data.workout));
    });
  }
}

function getCompletedWorkoutsAsync(workouts){
  return{
    type: GET_COMPLETED_WORKOUTS_LIST,
    workouts: workouts
  }
}

function getlastWorkoutAction(workout){
  return{
    type: GET_LAST_WORKOUT,
    lastWorkout: workout
  }
}
