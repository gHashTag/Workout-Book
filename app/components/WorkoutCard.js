'use strict'

import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux';

import {
  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native'

import moment from 'moment';

import { Colors } from '../common/constStyles';
import { customStyles} from '../common/customStyles';
import { compoundStyles} from '../common/compoundStyles';
import SetCard from './SetCard'

import EntypeIcon from 'react-native-vector-icons/Entypo';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import OctiIcons from 'react-native-vector-icons/Octicons';

import Swiper from 'react-native-page-swiper';
import { NavigationActions } from 'react-navigation';

class WorkoutCard extends Component {
  constructor(props){
    super(props)
  }

  renderExercises(){
    let exercisesView = [];
    
    this.props.workout.exercises.forEach((exercise,id) => {
      exercisesView.push(
        <View key = {id} style={styles.setsContainer}>
          <Text style={[styles.exerciseTitleStyle, customStyles.text(17, 'light', 'white')]}>{exercise.name}</Text>
          <View style={styles.setsContainer}>
              {this.renderSet(exercise.sets)}
          </View>
        </View>
      )
      id++;
    })

    return exercisesView;
  }

  renderSet(sets){
    let setsView = [];
    const customSetStyles = {
      idContainer: {
        backgroundColor: Colors.darkGreen
      },
      weightContainer: {
        backgroundColor: Colors.lightGreen,
      }
    }

    sets.forEach(set => {
      setsView.push(
        <SetCard key={set.id}
          id={set.id}
          weight={set.weight}
          reps={set.reps}
          propStyles={customSetStyles}>
        </SetCard>
      )
    })
    return setsView;
  }


  render(){
    if(this.props.workout.length == 0)
      return null;

    const{workout} = this.props;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
                 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let workoutDay = moment(workout.date);
    let day = days[workoutDay .day()];
    let month = months[workoutDay.month()];
    let dayMonth = workoutDay.date();

    return (
      <View style={styles.workoutContainer}>
        <View style={[styles.headerContainer, compoundStyles.blackThinVerticalBorder]}>
          <View style={styles.headerTextContainer}>
            <Text style = {customStyles.text(17,'thin','white')}>Previous: {day}. {month} {dayMonth}</Text>
            <Text style = {customStyles.text(20,'light','white')}>{workout.type}</Text>
          </View>
          <View style={styles.navIconContainer}>
            <TouchableOpacity onPress={this.props.loginScreen}>
               <EntypeIcon name="chevron-thin-left" size={23} style={styles.navIconStyle}/>
            </TouchableOpacity>
            <TouchableOpacity>
               <EntypeIcon name="chevron-thin-right" size= {23} style={styles.navIconStyle}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={[styles.generalInfoContainer, compoundStyles.blackThinRightBorder]}>
            <View style={styles.infoContainer}>
                <View style={[styles.iconContainer, compoundStyles.center]}>
                   <IonicIcon name ="ios-water-outline" size={25} style={styles.iconStyle}/>
                </View>
                <View style={styles.textContainer}>
                   <Text style={customStyles.text(30, 'light','white')}>344</Text>
                   <Text style={customStyles.text(10, 'thin',Colors.lightBlue)}>CALORIES BURNED</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={[styles.iconContainer,compoundStyles.center]}>
                   <OctiIcons name = "watch" size={25} style={styles.iconStyle}/>
                </View>
                <View style={styles.textContainer}>
                   <Text style={customStyles.text(30, 'light', 'white')}>{workout.duration}</Text>
                   <Text style={customStyles.text(10, 'thin',Colors.lightBlue)}>MIN. SPEND</Text>
                </View>
            </View>
          </View>

          <View style={styles.exercisesInfoContainer}>
            <Swiper
              style={styles.wrapper}
              pager={false}>
              {this.renderExercises()}
            </Swiper>
          </View>
        </View>
      </View>
    )
  }
}

WorkoutCard.propTypes = {
};


const mapDispatchToProps = dispatch => ({
  loginScreen: () => dispatch({type})
});


const styles = StyleSheet.create({
  workoutContainer: {
    marginBottom: 20
  },
  headerContainer: {
     backgroundColor: Colors.thinViolet,
     flexDirection: 'row',
     justifyContent: 'space-between'
  },
  headerTextContainer:{
    margin: 20
  },
  navIconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navIconStyle:{
    color:  Colors.darkViolet,
    marginRight: 20
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.lightViolet
  },
  generalInfoContainer: {
    flex: 2.3
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 30
  },
  iconContainer: {
    flex: 2,
  },
  textContainer: {
    flex: 3
  },
  iconStyle: {
    color: Colors.lightBlue
  },
  exercisesInfoContainer: {
    flex: 3
  },
  exerciseTitleStyle: {
    marginLeft: 20,
    marginVertical: 5
  },
  setsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
})

export default connect(null, mapDispatchToProps)(WorkoutCard)
