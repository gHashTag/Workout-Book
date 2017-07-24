import { AppNavigator } from '../components/plansscreen/PlansTabNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Default'));

const tabnavigation = (state = initialState, action) => {
  let nextState;
  switch(action.type){
    case 'Default':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Main' }),
          state
        );
        break;
    case 'Custom':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'StartWorkout' }),
            state
         );
        break;
    default:
     nextState = AppNavigator.router.getStateForAction(action, state);
     break;
  }

  return nextState || state;
}

export default tabnavigation
