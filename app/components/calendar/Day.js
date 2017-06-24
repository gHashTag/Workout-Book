import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

export default class Day extends Component {
  static propTypes = {
    caption: PropTypes.any,
    filler: PropTypes.bool,
    isSelected: PropTypes.bool,
    isToday: PropTypes.bool,
    isWeekend: PropTypes.bool,
    onPress: PropTypes.func
  }

  dayCircleStyle = (isWeekend, isSelected, isToday) => {
    const dayCircleStyle = [styles.dayCircleFiller];

    if (isSelected) {
      if (isToday) {
        dayCircleStyle.push(styles.currentDayCircle);
      } else {
        dayCircleStyle.push(styles.selectedDayCircle);
      }
    }

    return dayCircleStyle;
  }

  dayTextStyle = (isWeekend, isSelected, isToday) => {
    const dayTextStyle = [styles.day];

    if (isToday && !isSelected) {
      dayTextStyle.push(styles.currentDayText);
    } else if (isToday || isSelected) {
      dayTextStyle.push(styles.selectedDayText);
    } else if (isWeekend) {
      dayTextStyle.push(styles.weekendDayText);
    }

    return dayTextStyle;
  }

  render() {
    let { caption} = this.props;
    const {
      filler,
      isWeekend,
      isSelected,
      isToday
    } = this.props;

    return filler
    ? (
        <TouchableWithoutFeedback>
          <View style={styles.dayButtonFiller}>
            <Text style={styles.day} />
          </View>
        </TouchableWithoutFeedback>
      )
    : (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.dayButton}>
          <View style={this.dayCircleStyle(isWeekend, isSelected, isToday)}>
            <Text style={this.dayTextStyle(isWeekend, isSelected, isToday)}>{caption}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  dayButton: {
    alignItems: 'center',
    padding: 10,
    width: DEVICE_WIDTH / 7,
  },
  dayButtonFiller: {
    padding: 10,
    width: DEVICE_WIDTH / 7,
  },
  day: {
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: 'sans-serif-light',
    color: 'white'
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  currentDayCircle: {
    backgroundColor: 'red',
  },
  currentDayText: {
    color:  '#34C284',
  },
  selectedDayCircle: {
    backgroundColor: 'black',
  },
  hasEventCircle: {
  },
  hasEventDaySelectedCircle: {
  },
  hasEventText: {
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weekendDayText: {
    color: 'white',
  },
});
