import React, {Component} from 'react';
import {View,Text, TextInput, Image,StyleSheet, Dimensions, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import {Colors} from '../../common/constStyles';
import { customStyles} from '../../common/customStyles';
import { compoundStyles} from '../../common/compoundStyles';
import {workoutPlansList} from '../../common/workoutPlansList';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-page-swiper';

class Header extends Component {
  render(){
    return (
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor= {Colors.darkViolet} barStyle="light-content"></StatusBar>
        <TouchableOpacity onPress={() => this.props.navigateBack()}>
          <Icon name="ios-arrow-round-back" size={45} style={{color: Colors.lightBlue, marginLeft: 10}}/>
        </TouchableOpacity>
        <Text style={customStyles.text(20, 'light', 'white')}>
          NEW WORKOUT PLAN
        </Text>
        <TouchableOpacity>
          <Icon name="ios-checkmark" size={55} style={{color: Colors.lightBlue, marginRight: 10}}/>
        </TouchableOpacity>
      </View>
    )
  }
}


class WorkoutPlanCard extends Component {
  constructor(props){
    super(props)

    this.getColorsRadius = this.getColorsRadius.bind(this);
    this.highlightColor = this.highlightColor.bind(this);
    this.highlightDay = this.highlightDay.bind(this);

    this.state = {
      colorsRadius: 0,
      isColorClicked: [false, false, false, false, false, false],
      isDayClicked: [false, false, false, false, false, false, false]
    }
  }

  highlightDay (id){
    let clickedIds = [false, false, false, false, false, false, false];
    clickedIds[id] = true;
    this.setState({isDayClicked: clickedIds});
  }

  renderDays(){
    let dayViews = [];
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const viewStyle = {
      height: this.state.colorsRadius,
      width: this.state.colorsRadius,
      justifyContent: 'center',
      alignItems: 'center'
    }
    const highlightedViewStyle = {
      height: this.state.colorsRadius * 1.1,
      width: this.state.colorsRadius * 1.1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: Colors.lightBlue,
      borderRadius: 50,
      borderWidth: 1
    }

    for(let i = 0; i < 7; i++){
      dayViews.push(
        <TouchableOpacity key={i} onPress={() => this.highlightDay(i)}
          style={this.state.isDayClicked[i] ? highlightedViewStyle : viewStyle}>
          <Text style={this.state.isDayClicked[i] ?
            customStyles.text(17,'light', Colors.lightBlue) : customStyles.text(17,'light', Colors.greyViolet)}>
            {days[i]}
          </Text>
        </TouchableOpacity>
      )
    }

    const daysContainerStyle = {
      marginLeft: 15,
      marginRight: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }

    return (
      <View style={daysContainerStyle}>
        {dayViews}
      </View>
    )
  }

  highlightColor (id){
    let clickedIds = [false, false, false, false, false, false];
    clickedIds[id] = true;
    this.setState({isColorClicked: clickedIds});
  }

  renderColors(){
    let colorViews = [];
    const colors = ['#595296', '#94E27F', '#8AE0DA', '#8891E0', '#AF7EE1', '#DF80DD'];
    const highlightedColors = ['#625b99', 'rgba(190, 237, 177, 0.5)', '#98e2dd', '#9ca3e2', '#AF7EE1', '#d897d7'];
    const colorViewStyle = {
      height: this.state.colorsRadius,
      width: this.state.colorsRadius,
      borderRadius: 50,
      borderWidth: 7
    }

    const colorsContainerStyle = {
      marginLeft: 10,
      marginRight: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }

    for(let i = 0; i < 6; i++){
      colorViews.push(
        <TouchableOpacity key={i} onPress={() => this.highlightColor(i)}>
          <View style={[
            colorViewStyle,
            {backgroundColor: colors[i]},
            this.state.isColorClicked[i] ?
            {borderColor: highlightedColors[i]} : {borderColor: Colors.thinViolet}
          ]}/>
        </TouchableOpacity>
      )
    }

    return (
      <View style={colorsContainerStyle}>
        {colorViews}
      </View>
    );
  }


  getColorsRadius(event){
    this.setState({colorsRadius: event.nativeEvent.layout.height * 0.6});
  }


  render(){
    const mainContainerStyle = [{
      flex: 1,
      margin: 17,
      backgroundColor: Colors.darkViolet
    }, compoundStyles.blackThinBorder];

    return(
      <View style = {mainContainerStyle}>
        <View style={[{flex: 1.5, flexDirection: 'row', backgroundColor: Colors.thinViolet}, compoundStyles.blackThinBottomBorder]}>
          <View style={{flex: 4, justifyContent: 'center'}}>
            <TextInput
              style={[{marginLeft: 20}, customStyles.text(18, 'light', 'white')]}
              placeholder='Workout name'
              placeholderTextColor= {Colors.greyViolet}
              underlineColorAndroid= {Colors.thinViolet}
              clearTextOnFocus={true}
            />
          </View>
          <View style={{flex: 1, backgroundColor: Colors.lightViolet, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.props.onAddWorkout}>
              <Icon name="ios-add-outline" size={55} color = {Colors.lightBlue}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{flex: 1, justifyContent: 'center', backgroundColor: Colors.lightViolet}, compoundStyles.blackThinBottomBorder]}>
          <Text style={[{marginLeft: 20}, customStyles.text(18, 'thin', 'white')]}>
            COLOR TAG
          </Text>
        </View>

        <View onLayout={this.getColorsRadius} style={[{flex: 1.5, backgroundColor: Colors.thinViolet}, compoundStyles.blackThinBottomBorder]}>
          {this.renderColors()}
        </View>

        <View style={[{flex: 1, justifyContent: 'center', backgroundColor: Colors.lightViolet}, compoundStyles.blackThinBottomBorder]}>
          <Text style={[{marginLeft: 20}, customStyles.text(18, 'thin', 'white')]}>
            SELECT WORKOUT DAY
          </Text>
        </View>

        <View style={[{flex: 1.5, backgroundColor: Colors.thinViolet}, compoundStyles.blackThinBottomBorder]}>
          {this.renderDays()}
        </View>

        <View style={[{flex: 1, justifyContent: 'center', backgroundColor: Colors.lightViolet}, compoundStyles.blackThinBottomBorder]}>
          <Text style={[{marginLeft: 20}, customStyles.text(18, 'thin', 'white')]}>
             EXERCISES
          </Text>
        </View>

        <View style={[{flex: 2}, compoundStyles.blackThinBottomBorder]}>
          <ScrollView>
          </ScrollView>
        </View>

        <View style={{flex: 1.8, backgroundColor: Colors.lightGreen, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcon name="dumbbell" size={30} color = 'white'/>
          <Text style={[{marginLeft: 15}, customStyles.text(23, 'light', 'white') ]}>Add Exercise</Text>
        </View>
      </View>
    )
  }
}


class Content extends Component {
  constructor(props){
    super(props);

    this.state = {
      countWorkouts: 1
    }
  }

  addWorkout(){
    this.setState({countWorkouts: this.state.countWorkouts + 1});
  }


  renderWorkouts(){
    let views = [];

    const viewStyle = {
      flex: 1,
      margin: 17,
      backgroundColor: Colors.lightGreen
    }

    for(let i = 0; i < this.state.countWorkouts; i++){
      views.push(
        <WorkoutPlanCard onAddWorkout={() => this.addWorkout()} key = {i}/>
      )
    }

    return views;
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: Colors.thinViolet,justifyContent: 'center',alignItems: 'center'}}>
            <TextInput
              style={[{flex: 1},customStyles.text(17,'light', 'white')]}
              placeholder='Name your plan'
              placeholderTextColor= {Colors.greyViolet}
              textAlign="center"
              underlineColorAndroid= {Colors.thinViolet}
              clearTextOnFocus={true}
            />
        </View>

        <View style={{flex: 8}}>
          <Swiper style={styles.wrapper} activeDotColor='white'>
            {this.renderWorkouts()}
          </Swiper>
        </View>
      </View>
    )
  }
}

class NewCustomPlan extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigateBack={this.props.navigateBack}/>
        <Content/>
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
    backgroundColor: Colors.darkViolet,
    marginVertical: 10
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.darkGreen
  }
})

const mapDispatchToProps = dispatch => ({
    navigateBack: () => dispatch({type: 'BackToPlans'}),
})

export default connect(null, mapDispatchToProps)(NewCustomPlan);
