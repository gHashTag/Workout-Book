'use strict'

import { combineReducers } from 'redux'

import navigation from './navigation'
import workouts from './workouts'
import calendar from './calendar'
import ui from './ui'
import timer from './timer'

const reducers = combineReducers({
  navigation,
  workouts,
  calendar,
  ui,
  timer
})

export default reducers
