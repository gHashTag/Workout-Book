'use strict'

import {SELECT_NEXT_MONTH, SELECT_PREVIOUS_MONTH} from './ActionTypes.js'

export function selectNextMonth(){
  return dispatch => {
    dispatch(selectNextMonthAction());
  }
}

function selectNextMonthAction(){
  return {
    type: SELECT_NEXT_MONTH
  }
}

export function selectPreviousMonth(){
  return dispatch => {
    dispatch(selectPreviousMonthAction());
  }
}

function selectPreviousMonthAction(){
  return {
    type: SELECT_PREVIOUS_MONTH
  }
}
