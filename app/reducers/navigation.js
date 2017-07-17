import { AppNavigator } from '../containers/AppWithNavigation';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));

const navigation = (state = initialState, action) => {
  let nextState;
  switch(action.type){
    case 'Main':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Main' }),
          state
        );
        break;
    case 'StartWorkout':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Workout' }),
            state
         );
        break;
    case 'History':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName: 'History'})
        );
        break;
    case 'PickExercise':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName: 'PickExercise'})
          );
        break;
    case 'Back':
      nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
          );
      break;
    default:
     nextState = AppNavigator.router.getStateForAction(action, state);
     break;
  }

  return nextState || state;
}

export default navigation
