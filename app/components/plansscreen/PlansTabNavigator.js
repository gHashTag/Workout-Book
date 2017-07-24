import React, {Component} from 'react';

import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import resolveAssetSource from 'resolveAssetSource';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import {workoutPlansList} from '../../common/workoutPlansList';

import DefaultPlansScreen from './DefaultPlansScreen';
import CustomPlansScreen from './CustomPlansScreen';

const routeConfiguration = {
  Default: { screen: DefaultPlansScreen },
  Custom: {screen: CustomPlansScreen},
}

const styleConfiguration = {
  tabBarOptions: {
    activeTintColor: Colors.lightBlue,
    labelStyle: {
      fontSize: 17,
      fontFamily: 'sans-serif-light',
      color: Colors.lightBlue
    },
    style: {
      backgroundColor: Colors.darkViolet,
    },
    indicatorStyle: {
      backgroundColor: Colors.lightBlue,
      height: 4
    }
  }
}

export const AppNavigator = TabNavigator(
  routeConfiguration,
  styleConfiguration
);

class PlansTabNavigation extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {dispatch, navigation} = this.props
    return (
      <AppNavigator navigation={addNavigationHelpers({dispatch, state: navigation})} />
    )
  }
}

PlansTabNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  navigation: state.tabnavigation
});

export default connect(mapStateToProps)(PlansTabNavigation);
