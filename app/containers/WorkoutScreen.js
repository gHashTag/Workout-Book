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

import {startTimerAction, stopTimerAction} from '../actions/TimerActions'

import {connect} from 'react-redux'
import {Colors} from '../common/constStyles'
import {customStyles} from '../common/customStyles'
import ExerciseCard from '../components/workoutscreen/ExerciseCard'

import IonicIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypeIcon from 'react-native-vector-icons/Entypo';

import moment from 'moment';

class StartWorkoutScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentMoment: moment(),
      showTime: true
    }
  }

  componentWillMount(){
    this.props.startTimer();
  }
  componentDidMount(){
    this.workoutIntervalId = setInterval(this.countWorkoutTime.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.workoutIntervalId);
  }
  countWorkoutTime() {
    this.setState({
      currentMoment: moment()
    })
  }

  switchSubMenu() {
    this.setState({showTime: !this.state.showTime});
  }

  saveWorkout(e){
    e.preventDefault();

    this.props.navigateBack();
    this.props.stopTimer();
  }

  render () {
    const startMoment = moment(this.props.timer.startedAt);

    let workoutDuration = moment(0, 'HH');
    if(startMoment < this.state.currentMoment){
      workoutDuration = moment.utc(this.state.currentMoment.diff(startMoment));
    }

    let subMenu = this.state.showTime ? (
      <View style = {styles.headerTimerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IonicIcon name='ios-timer-outline' size={20} style ={styles.timerIconStyle}/>
          <Text style={customStyles.text(30,'thin','white')}>
            {workoutDuration.format('HH:mm:ss')}
          </Text>
        </View>
        <TouchableOpacity style={styles.rightIconStyle} onPress={this.switchSubMenu.bind(this)}>
          <EntypeIcon name="chevron-thin-right" size={23} style={{color:'white'}}/>
        </TouchableOpacity>
      </View>
    ) : (
      <View style = {styles.headerIconsContainer}>
        <TouchableOpacity onPress={this.switchSubMenu.bind(this)}>
          <EntypeIcon name="chevron-thin-left" size={23} style={{color:'white'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <IonicIcon name='ios-add-circle-outline' size={30} style={styles.iconStyle}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <IonicIcon name='ios-stopwatch-outline' size={30} style={styles.iconStyle}/>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor = {Colors.darkGreen}  barStyle="light-content"/>
        <View style={styles.headerContainer}>
          <View style = {styles.headerTitleContainer}>
            <TouchableOpacity onPress={this.props.navigateBack}>
              <IonicIcon name='ios-arrow-round-down' size= {40} style={styles.iconStyle}/>
            </TouchableOpacity>
            <Text style={customStyles.text(22,'light','white')}>QUADS & DELTOIDS</Text>
            <TouchableOpacity onPress={this.saveWorkout.bind(this)}>
              <IonicIcon name='ios-checkmark-circle-outline' size={33} style={styles.iconStyle}/>
            </TouchableOpacity>
          </View>
          {subMenu}
        </View>

        <View style={styles.contentContainer}>
          <ScrollView>
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
  headerTimerContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen
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
  timerIconStyle: {
    color:'white',
    marginRight: 10
  },
  rightIconStyle: {
    position: 'absolute',
    right:25,
  },
  contentContainer:{
    flex: 4
  }
})

const mapStateToProps = state => ({
  timer: state.timer
})

const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch({type: 'Back'}),
  startTimer: () => dispatch(startTimerAction()),
  stopTimer: () => dispatch(stopTimerAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartWorkoutScreen);
