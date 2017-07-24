import { PlansNavigator } from '../containers/WorkoutPlansScreen';
import { NavigationActions } from 'react-navigation';

const initialState = PlansNavigator.router.getStateForAction(PlansNavigator.router.getActionForPathAndParams('AvailablePlans'));

const customplansnavigation = (state = initialState, action) => {
  let nextState;
  switch(action.type){
    case 'AvailablePlans':
      nextState = PlansNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AvailablePlans' }),
        state
      );
    break;
    case 'NewCustomPlan':
      nextState = PlansNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'NewCustomPlan' }),
        state
      );
    break;
    case 'BackToPlans':
      nextState = PlansNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    break;
    default:
      nextState = PlansNavigator.router.getStateForAction(action, state);
    break;
  }

  return nextState || state;
}

export default customplansnavigation;
