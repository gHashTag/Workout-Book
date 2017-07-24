'use strict'

import { combineReducers } from 'redux'

import navigation from './navigation'
import plansnavigation from './plansnavigation'
import customplansnavigation from './customplansnavigation'
import workouts from './workouts'
import calendar from './calendar'
import ui from './ui'
import timer from './timer'
import exercises from './exercises'

const reducers = combineReducers({
  navigation,
  plansnavigation,
  customplansnavigation,
  workouts,
  calendar,
  ui,
  timer,
  exercises
})

export default reducers
