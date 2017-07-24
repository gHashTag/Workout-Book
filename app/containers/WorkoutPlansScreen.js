'use strict'

import React, {Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationOptions} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../common/constStyles'
import {customStyles} from '../common/customStyles'

import PlansTabNavigator from '../components/plansscreen/PlansTabNavigator'

class Header extends Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor= {Colors.darkViolet} barStyle="light-content"></StatusBar>
          <Icon name="ios-menu" size={35} style={{color: Colors.lightBlue, marginLeft: 10}}/>
          <Text style={[styles.titleStyle, customStyles.text(20, 'light', 'white')]}>
            WORKOUT PLANS
          </Text>
          <Icon name="md-clipboard" size={30} style={{color:Colors.lightBlue, marginRight: 10}}/>
      </View>
    )
  }
}

class Content extends Component {
  render(){
    return (
      <View style={styles.contentContainer}>
        <PlansTabNavigator/>
      </View>
    )
  }
}

class  PlansScreen  extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header/>
        <Content/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.darkViolet
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.darkViolet,
    marginVertical: 10
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.darkGreen
  }
})

PlansScreen.navigationOptions = {
  drawerLabel: 'WORKOUT PLANS',
  drawerIcon: () => (
    <MaterialIcon name='clipboard-text' size={25} color={'#bcbcff'}/>
  )
}

export default PlansScreen;
