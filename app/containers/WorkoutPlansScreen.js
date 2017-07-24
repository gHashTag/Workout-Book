import React, {Component} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import resolveAssetSource from 'resolveAssetSource';

import {Colors} from '../common/constStyles';
import { customStyles} from '../common/customStyles';
import {workoutPlansList} from '../common/workoutPlansList';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AvailablePlansScreen from '../components/plansscreen/AvailablePlansScreen';
import NewCustomPlanScreen from '../components/plansscreen/NewCustomPlanScreen';

const routeConfiguration = {
  AvailablePlans: { screen: AvailablePlansScreen },
  NewCustomPlan: { screen: NewCustomPlanScreen }
}
const styleConfiguration = {
  navigationOptions: {
    header: null
  }
}

export const PlansNavigator =  StackNavigator(
  routeConfiguration,
  styleConfiguration
);

class WorkoutPlansScreen extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const {dispatch, navigation} = this.props
    return (
      <PlansNavigator navigation={addNavigationHelpers({dispatch, state: navigation})} />
    )
  }
}

WorkoutPlansScreen.navigationOptions = {
  drawerLabel: 'WORKOUT PLANS',
  drawerIcon: () => (
    <MaterialIcon name='clipboard-text' size={25} color={'#bcbcff'}/>
  )
}


const mapStateToProps = state => ({
  navigation: state.customplansnavigation
});

export default connect(mapStateToProps)(WorkoutPlansScreen);
