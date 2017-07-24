'use strict'

import { combineReducers } from 'redux'

import navigation from './navigation'
import tabnavigation from './tabnavigation'
import workouts from './workouts'
import calendar from './calendar'
import ui from './ui'
import timer from './timer'
import exercises from './exercises'

const reducers = combineReducers({
  navigation,
  tabnavigation,
  workouts,
  calendar,
  ui,
  timer,
  exercises
})

export default reducers
