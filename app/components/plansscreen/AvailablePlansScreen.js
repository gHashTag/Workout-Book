'use strict'

import React, {Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationOptions} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../common/constStyles'
import {customStyles} from '../../common/customStyles'

import PlansTabNavigator from './PlansTabNavigator'

class Header extends Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor= {Colors.darkViolet} barStyle="light-content"></StatusBar>
        <TouchableOpacity>
          <Icon name="ios-menu" size={45} style={{color: Colors.lightBlue, marginLeft: 15}}/>
        </TouchableOpacity>
        <Text style={customStyles.text(20, 'light', 'white')}>
          WORKOUT PLANS
        </Text>
        <TouchableOpacity onPress={() => this.props.createNewPlan()}>
          <Icon name="md-clipboard" size={30} style={{color:Colors.lightBlue, marginRight: 10}}/>
        </TouchableOpacity>
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

class  AvailablePlansScreen  extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header createNewPlan={this.props.createNewPlan}/>
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

const mapDispatchToProps = dispatch => ({
  createNewPlan: () => dispatch({type: 'NewCustomPlan'})
})

export default connect(null, mapDispatchToProps)(AvailablePlansScreen);
