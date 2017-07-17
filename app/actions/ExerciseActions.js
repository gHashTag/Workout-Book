'use strict'

import {
  SELECT_EXERCISE
} from './ActionTypes';

export function selectExerciseAction(exerciseId){
  return{
    type: SELECT_EXERCISE,
    id: exerciseId
  }
}
