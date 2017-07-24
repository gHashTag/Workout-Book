import React, {Component} from 'react';

import {connect} from 'react-redux'

import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import resolveAssetSource from 'resolveAssetSource';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import {workoutPlansList} from '../../common/workoutPlansList';

class CustomPlansScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Plans'
  };
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.darkViolet}}>
        <Text style={customStyles.text(17,'thin','white')}>You have no active plans</Text>
        <TouchableOpacity style={{backgroundColor: Colors.lightGreen, borderRadius: 30, marginVertical: 15}}>
          <Text style={[{marginVertical: 10, marginLeft: 20, marginRight: 20},customStyles.text(20,'light','white')]}>CREATE PLAN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomPlansScreen;
