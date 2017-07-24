import React, {Component} from 'react';
import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import {workoutPlansList} from '../../common/workoutPlansList';

import Icon from 'react-native-vector-icons/Ionicons'

class Header extends Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor= {Colors.darkViolet} barStyle="light-content"></StatusBar>
        <TouchableOpacity onPress={() => this.props.navigateBack()}>
          <Icon name="ios-arrow-round-back" size={35} style={{color: Colors.lightBlue, marginLeft: 10}}/>
        </TouchableOpacity>
        <Text style={customStyles.text(20, 'light', 'white')}>
          NEW WORKOUT PLAN
        </Text>
        <View/>
      </View>
    )
  }
}

class Content extends Component {
  render(){
    return(
      <View>

      </View>
    )
  }
}

class NewCustomPlan extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigateBack={this.props.navigateBack}/>
        <Content/>
      </View>
    )
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
    navigateBack: () => dispatch({type: 'BackToPlans'}),
})

export default connect(null, mapDispatchToProps)(NewCustomPlan);
