import React, {Component} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';

import resolveAssetSource from 'resolveAssetSource';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';

class AvailableCustomPlansScreen extends Component {
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.darkViolet}}>
        <Text style={customStyles.text(17,'thin','white')}>You have no active plans</Text>
        <TouchableOpacity onPress={() => this.props.createNewPlan()} style={{backgroundColor: Colors.lightGreen, borderRadius: 30, marginVertical: 15}}>
          <Text style={[{marginVertical: 10, marginLeft: 20, marginRight: 20},customStyles.text(20,'light','white')]}>CREATE PLAN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  exercises: state.exercises
})

const mapDispatchToProps = dispatch => ({
  createNewPlan: () => dispatch({type: 'NewPlan'})
})


export default connect(mapStateToProps, mapDispatchToProps)(AvailableCustomPlansScreen);
