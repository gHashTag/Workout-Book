'use strict'

import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeeback,
  Animated,
  Dimensions
} from 'react-native'
import {connect} from 'react-redux'

import { Colors } from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import {toggleMainScreen} from '../../actions/UIActions'


import Icon from 'react-native-vector-icons/Entypo';

class Footer extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.animatedValue = new Animated.Value(70);
    this.animatedValue1 = new Animated.Value(0);
  }

  moveFooter(){
    const {startWorkout, hideMainScreen} = this.props;
    startWorkout();

    /*hideMainScreen();
    Animated.stagger(150,[
      Animated.timing(this.animatedValue, {
         toValue: 200,
         duration: 200
       }),
       Animated.spring(this.animatedValue1, {
         toValue: 560,
         friction: 5,
         tension: 50,
       })
    ]).start(startWorkout);*/
  }

  render(){
    const interpolatedHight = this.animatedValue
    const animatedStyle = {
      height: this.animatedValue,
      bottom: this.animatedValue1,
    }

    return(
        <Animated.View style={[styles.footer, animatedStyle]}>
          <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={this.moveFooter.bind(this)}>
            <View style={styles.contentContainer}>
              <Icon name="flag" size={25} color='white' style={styles.startIcon}></Icon>
              <Text style={[styles.startLabel, customStyles.text(20,'light', 'white')]}> START WORKOUT </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.darkGreen
  },
  footer: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.darkGreen
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  startLabel: {
    marginLeft: 10
  }
})

const mapDispatchToProps = dispatch => ({
  startWorkout: () => dispatch({type: 'StartWorkout'}),
  hideMainScreen: () => dispatch(toggleMainScreen())
})

export default connect(null, mapDispatchToProps)(Footer)
