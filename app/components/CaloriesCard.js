'use strict'

import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class CaloriesCard extends Component{
  render(){
    return (
      <View style={styles.caloriesInfoContainer}>
        <View style = {styles.iconContainer}>
          <Icon name="ios-nutrition" size={35} color='#00BCD4'/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>2000 Cal</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  caloriesInfoContainer: {
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

export default CaloriesCard
