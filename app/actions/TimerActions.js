import {
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER
} from './ActionTypes'

export function startTimerAction(){
  return {
    type: START_TIMER,
    time: new Date().getTime()
  };
}

export function stopTimerAction(){
  return {
    type: STOP_TIMER,
    time: new Date().getTime()
  };
}
