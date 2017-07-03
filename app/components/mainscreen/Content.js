'use strict'

import React, { Component} from 'react'

import {
  View, Text, StyleSheet, ScrollView, Image, Animated
} from 'react-native'

import moment from 'moment';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getCompletedWorkouts, getLastWorkout} from '../../actions/WorkoutActions'

import { Colors } from '../../common/constStyles';

import WorkoutCard from './WorkoutCard'

class Content extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getLastWorkout();
  }

  render(){
    const {workout} = this.props;
    return (
      <View style = {[styles.mainContainer, {opacity: this.props.showContent ? 0 : 1}]}>
          <ScrollView style = {styles.infoContainer}>
            <WorkoutCard workout={this.props.workout}></WorkoutCard>
          </ScrollView>
        </View>
    )
  }
}

function mapStateToProps(state){
  return{
    workout: state.workouts,
    showContent: state.ui.hiddenMainScreen,
    timer: state.timer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCompletedWorkouts: getCompletedWorkouts,
    getLastWorkout: getLastWorkout
  }, dispatch);
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 8,
    backgroundColor: Colors.darkViolet
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    marginBottom: 10
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);
