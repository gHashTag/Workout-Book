'use strict'

import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native'

import { Colors } from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';

import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
  render(){
    let welcomeMessage = "Hello Alex! Things look alright."
    let readyMessage = "Are you ready to rock?"

    return (
      <View style={styles.header}>
        <StatusBar backgroundColor='#363656' barStyle="light-content"/>
        <View style = {styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Icon name="ios-menu" size={35} color='#00BCD4' style={styles.icon}/>
          </View>
          <View style={styles.welcomeContainer}>
            <Image style={styles.profileImage} source={require('../../assets/doge.jpg')}></Image>
            <Text style={[styles.welcomeMessage, customStyles.text(20,'light','white')]}>{welcomeMessage}</Text>
            <Text style={[styles.welcomeMessage, customStyles.text(20,'light','white')]}>{readyMessage}</Text>
          </View>
          <View style={styles.iconContainer}></View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flex: 3,
    backgroundColor: Colors.darkViolet,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  welcomeContainer: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1
  },
  icon: {
    marginTop: 10,
    marginLeft: 10
  },
  profileImage: {
    width: 75,
    height: 75,
    marginTop: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00BCD4'
  },
  welcomeMessage: {
    marginTop: 3
  }
})

export default Header
