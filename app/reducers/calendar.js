import { SELECT_NEXT_MONTH, SELECT_PREVIOUS_MONTH } from '../actions/ActionTypes';

import moment from 'moment';

const initialState = moment();

const calendar = (state = initialState, action) => {
  let curMonth = state.clone();

  switch(action.type){
    case SELECT_NEXT_MONTH:
      let nextMonth = curMonth.add(1, 'month');
      return nextMonth;

    case SELECT_PREVIOUS_MONTH:
      let prevMonth = curMonth.subtract(1, 'month');
      return prevMonth;
      
    default:
      return state;
  }
}


export default calendar
