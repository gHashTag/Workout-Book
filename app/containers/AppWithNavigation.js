import React, {Component} from 'react';

import { DrawerItems } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import WorkoutScreen from './WorkoutScreen';
import HistoryScreen from './HistoryScreen';
import PickExerciseScreen from './PickExerciseScreen';
import WorkoutPlansScreen from './WorkoutPlansScreen';
import MenuComponent from '../components/shared/MenuComponent';

const routeConfiguration = {
  Main: { screen: MainScreen },
  History: {screen: HistoryScreen},
  WorkoutPlans: {screen: WorkoutPlansScreen},
  Workout: {screen: WorkoutScreen},
  PickExercise: {screen: PickExerciseScreen}
}

const menuConfiguration = {
  drawerWidth: 250,
  drawerPosition: 'left',
  contentComponent: props =>  <MenuComponent items={props}></MenuComponent>
}

export const AppNavigator = DrawerNavigator(
  routeConfiguration,
  menuConfiguration
);

class AppWithNavigation extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {dispatch, navigation} = this.props
    return(
      <AppNavigator navigation={addNavigationHelpers({dispatch, state: navigation})} />
    )
  }
}

AppWithNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(AppWithNavigation);
