'use strict'
import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class SleepCard extends Component{
  render(){
    return (
      <View style={styles.sleepInfoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="ios-alarm" size={35} color='#00BCD4'></Icon>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>7.30 Hours</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sleepInfoContainer: {
    flex: 1,
    backgroundColor: '#655F9A'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    fontFamily: 'sans-serif-light',
    color:'#00BCD4'
  }
})

export default SleepCard
