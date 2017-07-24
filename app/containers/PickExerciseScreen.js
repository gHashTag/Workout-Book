import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Animated} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import {Colors} from '../common/constStyles';
import {customStyles} from '../common/customStyles'
import {exercisesList} from '../common/exercisesList';

import Icon from 'react-native-vector-icons/Ionicons';

import {selectExerciseAction} from '../actions/ExerciseActions';


class Header extends Component {
  render(){
    return(
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor='#363656' barStyle="light-content"></StatusBar>
        <TouchableOpacity>
          <Icon name="ios-close-outline" size={55} style={[styles.iconStyle, {marginLeft: 15}]} onPress={this.props.onPressBack}/>
        </TouchableOpacity>
        <Text style={[styles.titleStyle, customStyles.text(22, 'light', 'white')]}>
          Choose Exercises
        </Text>
        <Icon name="ios-checkmark-outline" size={55} style={[styles.iconStyle, {marginRight: 15}]}/>
      </View>
    )
  }
}

class Info extends Component {
  render() {
    const textStyle = [ customStyles.text(15, 'thin', 'white'), {textAlign: 'center'}];
    return (
      <View style={styles.infoContainer}>
        <Text style={textStyle}>
          Tap the exercises you want to include in your workout. Use controls below to filter exercises
        </Text>
      </View>
    )
  }
}


class Content extends Component {
  constructor(props){
    super()

    this.bubbleAnimatedValues = [];
    this.textAnimatedValues = [];

    let initialFilter = 'Legs';
    let exercisesVisibility = [];
    for(let i = 0; i < exercisesList.total; i++){
      exercisesVisibility.push(true);
      this.bubbleAnimatedValues.push( new Animated.Value(0) );
      this.textAnimatedValues.push( new Animated.Value(20));
    }

    this.state = {
      isFilterClicked: [true, false, false, false],
      circleRadius: 0,
      activeFilter: initialFilter,
      isExerciseVisible: exercisesVisibility,
      selectedExercises: [],
      selCircleRadius: 0
    }
    this.filterExers = this.filterExers.bind(this);

    this.getColumnDimensions = this.getColumnDimensions.bind(this);
    this.getSelExersContainerDimensions = this.getSelExersContainerDimensions.bind(this);

    this.onSelectExercise = this.onSelectExercise.bind(this);
  }

  componentDidMount(){
    this.animate();
  }

  animate () {
    let animations = [];

    for(let i = 0; i < exercisesList.total; i++){
      animations.push(Animated.timing(
        this.bubbleAnimatedValues[i],
        {
          toValue: Math.random() * 15 + 5,
          duration: 1000
        }
      ));
      animations.push(Animated.timing(
        this.textAnimatedValues[i],
        {
          toValue: Math.random() > 0.5 ? (Math.random() * 10 + 1) : (-1 * (Math.random() * 10 + 1)),
          duration: 200
        }
      ));
    };

    Animated.parallel(animations).start(() => { this.animate() })
  }


  filterExers (id, filter){
    let clickedIds = [false, false, false, false];
    clickedIds[id] = true;
    this.setState({isFilterClicked: clickedIds, activeFilter: filter });
  }

  renderFilters(){
    const textStyle = customStyles.text(15, 'light', 'white');

    let filterButtons = [];

    let filerLabels = ['Legs', 'Back', 'Chest', 'Arms'];
    for(let i = 0; i < 4; i++){
      filterButtons.push(
        <TouchableOpacity
          key={i}
          style={this.state.isFilterClicked[i] ? styles.filterButtonClicked : styles.filterButton}
          onPress={() => this.filterExers(i, filerLabels[i])}>
          <Text style={textStyle}>{filerLabels[i]}</Text>
        </TouchableOpacity>
      )
    }

    return filterButtons;
  }

  getColumnDimensions(event){
    this.setState({
      circleRadius: event.nativeEvent.layout.width
    });
  }

  getSelExersContainerDimensions(event){
    this.setState({
      selCircleRadius: event.nativeEvent.layout.height
    })
  }

  onSelectExercise (id){
    let globalExersId = exercisesList[this.state.activeFilter].exercises[parseInt(id)].id;

    if(!this.state.isExerciseVisible[globalExersId]){
      return;
    }

    // Add picked exercise to the list of selected exercises
    let selectedExers = this.state.selectedExercises;
    selectedExers.push(exercisesList[this.state.activeFilter].exercises[parseInt(id)]);

    // Make picked exercise invisible
    let exercisesVisibility = this.state.isExerciseVisible;
    exercisesVisibility[globalExersId] = false;

    this.setState({selectedExercises: selectedExers, isExerciseVisible: exercisesVisibility});
  }

  onUnselectExercise (exercise){
    // Remove picked exercise from list of selected
    let selectedExers = this.state.selectedExercises;
    selectedExers.splice(selectedExers.indexOf(exercise), 1);

    // Make picked exercise visible
    let exercisesVisibility = this.state.isExerciseVisible;
    exercisesVisibility[exercise.id] = true;

    this.setState({selectedExercises: selectedExers, isExerciseVisible: exercisesVisibility});
  }

  renderSelectedExercise(exercise){
    const circleStyle = {
      width: this.state.selCircleRadius * 0.67,
      height: this.state.selCircleRadius * 0.67,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.lightBlue,
      borderRadius: 50
    }
    const textStyle = [customStyles.text(12, 'light', 'white'), {
      textAlign: 'center',
      marginRight: 10,
      marginLeft: 10
    }];

    return (
      <TouchableOpacity key={exercise.id} onPress={() => this.onUnselectExercise(exercise)}>
        <View style={circleStyle}>
          <Text style={textStyle}>{exercise.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }


  renderAllExercises(){
    const circleStyle = {
      width: this.state.circleRadius * 0.95,
      height: this.state.circleRadius * 0.95,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.lightGreen,
      borderRadius: 50
    };
    const textStyle = [customStyles.text(16, 'light', 'white'), {
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 10
    }];

    let exersColumns = [];
    const availableExercisesCount = exercisesList[this.state.activeFilter].count;
    const availableExercises = exercisesList[this.state.activeFilter].exercises;

    let id = 0;
    for(let i = 0; i < 4; i++){
      let column = [];

      const columnSize = i % 2 == 0 ? 2 : 3;
      for(let j = 0; j < columnSize && id < availableExercisesCount; j++, id++){
        let currentId = id;

        const bubbleMoveStyle= { marginVertical: this.bubbleAnimatedValues[currentId]};
        const textMoveStyle = Math.random() > 0.5 ? {marginTop: this.bubbleAnimatedValues[currentId]}
        : {marginBottom: this.bubbleAnimatedValues[currentId]};

        const visibleStyle = { opacity: this.state.isExerciseVisible[availableExercises[id].id] ? 1 : 0};

        column.push(
          <TouchableOpacity key = {j} onPress={() => this.onSelectExercise(currentId)}>
            <Animated.View
              style={[circleStyle, visibleStyle, bubbleMoveStyle]}>
              <Animated.Text style={[textStyle, textMoveStyle]}>{availableExercises[id].title}</Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        );
      }

      if(i == 0){
        exersColumns.push(
          <View
            key = {i}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onLayout={this.getColumnDimensions}>
            {column}
          </View>
        )
      } else{
        exersColumns.push(
          <View
            key = {i}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {column}
          </View>
        )
      }
    }

    return exersColumns;
  }


  render(){
    return(
      <View style={styles.contentContainer}>
        <View style={styles.selExersContainer}>
          <View style={{flex: 0.5}}/>
          <View style={styles.selExersContent} onLayout={this.getSelExersContainerDimensions}>
            {this.state.selectedExercises.map((exercise) => this.renderSelectedExercise(exercise))}
          </View>
          <View style={{flex: 0.5}}/>
        </View>

        <View style={styles.allExersContainer}>
          {this.renderAllExercises()}
        </View>

        <View style={styles.filterContainer}>
          <View style={{flex: 0.5}}/>
          <View style={styles.filterContent}>
            {this.renderFilters()}
          </View>
          <View style={{flex: 0.5}}/>
        </View>
      </View>
    )
  }
}


class PickExerciseScreen extends Component {
  constructor(props){
    super()
  }

  render(){
    return(
      <View style = {styles.mainContainer}>
        <Header onPressBack={() => this.props.navigateBack()}></Header>
        <Info></Info>
        <Content selectExercise={this.props.selectExercise}></Content>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:  Colors.lightViolet
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  titleStyle: {
    marginRight: 20
  },
  iconStyle: {
    color: Colors.lightBlue
  },
  infoContainer:{
    marginVertical: 10
  },
  contentContainer: {
    flex: 1
  },
  selExersContainer: {
    flex: 1.5,
    flexDirection: 'row'
  },
  selExersContent: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderBottomColor: Colors.greyViolet,
    borderTopColor: Colors.greyViolet
  },
  allExersContainer: {
    flex: 6,
    flexDirection: 'row'
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  filterContent: {
    flex: 10,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: Colors.darkViolet,
    borderRadius: 30
  },
  filterButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterButtonClicked: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
    borderRadius: 30,
    margin: 5
  }
})

const mapStateToProps = state => ({
  exercises: state.exercises
})

const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch({type: 'Back'}),
  selectExercise: (id) => dispatch(selectExerciseAction(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(PickExerciseScreen);
