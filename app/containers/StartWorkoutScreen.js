'use strict'

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {connect} from 'react-redux'
import {Colors} from '../common/constStyles'
import {customStyles} from '../common/customStyles'
import ExerciseCard from '../components/ExerciseCard'

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

class StartWorkoutScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor = {Colors.darkGreen}  barStyle="light-content"/>
        <View style={styles.headerContainer}>
          <View style = {styles.headerTitleContainer}>
            <TouchableOpacity onPress={this.props.navigateBack}>
              <Icon name='ios-arrow-round-down' size= {40} style={styles.iconStyle}/>
            </TouchableOpacity>
            <Text style={customStyles.text(22,'light','white')}>QUADS & DELTOIDS</Text>
            <TouchableOpacity>
              <Icon name='ios-checkmark-circle-outline' size={33} style={styles.iconStyle}/>
            </TouchableOpacity>
          </View>
          <View style = {styles.headerIconsContainer}>
            <TouchableOpacity>
              <Icon name='ios-close-outline' size={40} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='ios-add-circle-outline' size={30} style={styles.iconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='ios-stopwatch-outline' size={30} style={styles.iconStyle}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView>
            <ExerciseCard></ExerciseCard>
            <ExerciseCard></ExerciseCard>
            <ExerciseCard></ExerciseCard>
            <ExerciseCard></ExerciseCard>
            <ExerciseCard></ExerciseCard>
          </ScrollView>
        </View>
      </View>
    )
  }
}

StartWorkoutScreen.navigationOptions = {
  drawerLabel: 'SETTINGS',
  drawerIcon: () => (
    <MaterialIcon name="settings" size={25} color={'#bcbcff'}/>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.darkViolet
  },
  headerContainer:{
    flex: 1
  },
  headerTitleContainer: {
    flex: 1,
    backgroundColor: Colors.darkGreen,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerIconsContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.lightGreen
  },
  iconStyle: {
    color:'white'
  },
  contentContainer:{
    flex: 4
  }
})

const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch({type: 'Back'})
})

export default connect(null, mapDispatchToProps)(StartWorkoutScreen);
