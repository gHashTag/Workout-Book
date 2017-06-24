import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

import Calendar from '../components/calendar/Calendar'
import {Colors} from '../common/constStyles'
import {customStyles} from '../common/customStyles'

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

class Header extends Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor='#363656' barStyle="light-content"></StatusBar>
          <Icon name="ios-menu" size={35} style={styles.iconStyle}/>
          <Text style={[styles.titleStyle, customStyles.text(20, 'light', 'white')]}>
            CALENDAR
          </Text>
          <View></View>
      </View>
    )
  }
}

class Info extends Component{
  render(){
    const textStyle = customStyles.text(15,'thin',Colors.greyViolet);

    return (
      <View style={styles.infoContainer}>
        <View style={styles.columnContainer}>
          <View style={styles.dayInfo}>
            <View style={[styles.ellipse,{backgroundColor: '#76FF03'}]}/>
            <Text style={textStyle}>CHEST & TRICEPS</Text>
          </View>
          <View style={styles.dayInfo}>
            <View style={[styles.ellipse,{backgroundColor: '#7C4DFF'}]}/>
            <Text style={textStyle}>BACK & BICEPS</Text>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.dayInfo}>
            <View style={[styles.ellipse,{backgroundColor: '#EF6C00'}]}/>
            <Text style={textStyle}>QUADS & DELTOIDS</Text>
          </View>
          <View style={styles.dayInfo}>
            <View style={[styles.ellipse,{backgroundColor: '#FF3D00'}]}/>
            <Text style={textStyle}>TODAY</Text>
          </View>
        </View>
      </View>
    )
  }
}

class HistoryScreen extends Component{
  render(){
    return (
      <View style = {styles.mainContainer}>
        <Header/>
        <Calendar/>
        <Info></Info>
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
    marginVertical: 10
  },
  iconStyle: {
    color: Colors.lightBlue,
    marginLeft: 10
  },
  titleStyle: {
    marginRight: 20
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  columnContainer: {
    flex: 1
  },
  dayInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
    marginLeft: 30
  },
  ellipse: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginRight: 15
  }
})

HistoryScreen.navigationOptions = {
  drawerLabel: 'HISTORY',
  drawerIcon: () => (
    <MaterialIcon name="history" size={25} color={'#bcbcff'}/>
  )
}

export default connect()(HistoryScreen)
