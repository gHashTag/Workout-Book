import React, {Component} from 'react';

import {View,Text,Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import resolveAssetSource from 'resolveAssetSource';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import {workoutPlansList} from '../../common/workoutPlansList';

class DefaultPlansScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      screenWidth: 0
    }
  }

  componentDidMount(){
    const width = Dimensions.get('window').width;
    this.setState({screenWidth: width});
  }

  getImgHeight(img) {
    let source = resolveAssetSource(img);
    const screenWidth = this.state.screenWidth;
    const scaleFactor = source.width / screenWidth
    const imageHeight = source.height / scaleFactor

    return imageHeight;
  }

  static navigationOptions = {
    tabBarLabel: 'Plans Stock'
  };

  renderPlan(plan){
   let imgHeight = this.getImgHeight(plan.url);
    return (
      <TouchableOpacity key={plan.id} underlayColor={'transparent'}>
          <Image
             style={{width: this.state.screenWidth, height: imgHeight}}
            source= {plan.url}
          >
            <View style={{width: this.state.screenWidth, height: imgHeight, backgroundColor: Colors.darkViolet, opacity: 0.7, position: 'absolute'}}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={customStyles.text(20,'light','white')}>{plan.title}</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                { plan.tags.map( (tag, index) => this.renderTag(tag, index) )}
              </View>
            </View>
          </Image>
      </TouchableOpacity>
    )
  }

  renderTag(tag, index){
    return (
      <View key={index} style={{marginLeft: 5, backgroundColor: Colors.lightGreen, borderRadius: 20}}>
        <Text style={[{margin: 10}, customStyles.text(15,'light','white')]}>{tag}</Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        {workoutPlansList.map( (plan) => this.renderPlan(plan))}
      </ScrollView>
    );
  }
}


export default DefaultPlansScreen;
