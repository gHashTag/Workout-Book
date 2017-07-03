import React, {Component} from 'react';

import {View, StyleSheet, Image, Text} from 'react-native'
import { DrawerItems } from 'react-navigation';

import {Colors} from '../../common/constStyles'
import {customStyles} from '../../common/customStyles'

class MenuComponent extends Component{
  render(){
    return (
      <View style={styles.menu}>
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={require('../../assets/doge.jpg')}></Image>
          <View style={styles.labelContainer}>
            <Text style={styles.nameLabel}>Alex Shirokov</Text>
            <Text style={styles.statusLabel}>
              Completed Workouts: <Text style={{ color: '#00BCD4'}}>150</Text>
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <DrawerItems {...this.props.items}
            style={{backgroundColor: Colors.darkViolet}}
            labelStyle={customStyles.text(15,'light', Colors.greyViolet)}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.darkViolet
  },
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.mediumViolet,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  itemsContainer: {
    flex: 2.5
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00BCD4'
  },
  labelContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  nameLabel: {
    color: '#00BCD4',
    fontFamily:'sans-serif-light',
    fontSize: 23
  },
  statusLabel: {
    color: 'white',
    fontFamily: 'sans-serif-light',
    fontSize: 15
  },
  countLabel: {
    color: 'red',
    fontFamily:'sans-serif-light',
    fontSize: 15
  }
})

export default MenuComponent
