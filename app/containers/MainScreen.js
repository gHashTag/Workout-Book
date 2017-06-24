'use strict'

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { NavigationActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

class Main extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    showContent: state.ui.hiddenMainScreen
  }
}

Main.navigationOptions = {
  drawerLabel: 'HOME',
  drawerIcon: () => (
    <Icon name="home-outline" size={25} color={'#bcbcff'} style={styles.iconStyle}/>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(mapStateToProps)(Main);
