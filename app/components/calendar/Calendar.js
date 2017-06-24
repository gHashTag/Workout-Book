import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Colors} from '../../common/constStyles';
import {customStyles} from '../../common/customStyles';
import {compoundStyles} from '../../common/compoundStyles';

import Day from './Day';
import {selectPreviousMonth, selectNextMonth} from '../../actions/CalendarActions'
import moment from 'moment';

const DEVICE_WIDTH = Dimensions.get('window').width;
const VIEW_INDEX = 2;


function getNumberOfWeeks(month, weekStart) {
  const firstDay = moment(month).startOf('month').day();
  const offset = (firstDay - weekStart + 7) % 7;
  const days = moment(month).daysInMonth();
  return Math.ceil((offset + days) / 7);
}

class Calendar extends Component {

  state = {
    selectedMoment: moment(this.props.selectedDate),
    rowHeight: null,
  };

  static propTypes = {
    dayHeadings: PropTypes.array,
    monthNames: PropTypes.array,
    nextButtonText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    onDateSelect: PropTypes.func,
    onTouchNext: PropTypes.func,
    onTouchPrev: PropTypes.func,
    onTitlePress: PropTypes.func,
    prevButtonText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    scrollEnabled: PropTypes.bool,
    selectedDate: PropTypes.any,
    startDate: PropTypes.any,
    today: PropTypes.any,
    weekStart: PropTypes.number
  };

  static defaultProps = {
    width: DEVICE_WIDTH,
    dayHeadings: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
                 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    scrollEnabled: false,
    weekStart: 1
  };

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
    /*if (nextProps.selectedDate && this.props.selectedDate !== nextProps.selectedDate) {
      this.setState({selectedMoment: nextProps.selectedDate});
    }
    if (nextProps.currentMonth) {
      this.setState({currentMoment: moment(nextProps.currentMonth)});
    }*/
  }

  selectDate(date) {
    /*if (this.props.selectedDate === undefined) {
        this.setState({ selectedMoment: date,
                        currentMoment: date});
    }*/
  }

  onPrev = () => {
    this.props.selectPreviousMonth();
  }

  onNext = () => {
    this.props.selectNextMonth();
  }

  onWeekRowLayout = (event) => {
    if (this.state.rowHeight !== event.nativeEvent.layout.height) {
      this.setState({ rowHeight: event.nativeEvent.layout.height });
    }
  }

  renderCalendarView(argMoment) {
    let renderIndex = 0,
        weekRows = [],
        days = [];

    const
    startOfArgMoment = moment(argMoment).startOf('month'),
    selectedMoment = moment(this.state.selectedMoment),
    weekStart = this.props.weekStart,
    todayIndex = moment().date() - 1,
    argDaysCount = argMoment.daysInMonth(),
    offset = startOfArgMoment.isoWeekday() - 1,
    selectedIndex = moment(selectedMoment).date() - 1;

    do {
      const dayIndex = renderIndex - offset;
      const isoWeekday = (renderIndex + weekStart) % 7;
      const thisMoment = moment(startOfArgMoment).add(dayIndex, 'day');

      if (dayIndex >= 0 && dayIndex < argDaysCount) {
        days.push((
          <Day
             key={`${renderIndex}`}
             startOfMonth={startOfArgMoment}
             isWeekend={isoWeekday === 0 || isoWeekday === 6}
             onPress={() => {
               this.selectDate(thisMoment);
               this.props.onDateSelect && this.props.onDateSelect(thisMoment ? thisMoment.format(): null );
            }}
            caption={`${thisMoment.format('D')}`}
            isToday={moment().format('YYYY-MM-DD') == thisMoment.format('YYYY-MM-DD')}
            isSelected={selectedMoment.isSame(thisMoment)}
            />
        ));
      } else {
        days.push(<Day key={`${renderIndex}`} filler />);
      }

      if (renderIndex % 7 === 6) {
        weekRows.push(
          <View
             key={weekRows.length}
             onLayout={weekRows.length ? undefined : this.onWeekRowLayout}
             style={[styles.weekRow]}
             >
            {days}
          </View>);
        days = [];
        if (dayIndex + 1 >= argDaysCount) {
          break;
        }
      }

      renderIndex += 1;
    } while (true)

    return <View key={`${startOfArgMoment.format('YYYY-MM-DD')}`} style={styles.monthContainer}>{weekRows}</View>;
  }

  renderHeading() {
    let headings = [];

    for (let i = 0; i < 7; ++i) {
      headings.push(
        <Text
           key={i}
           style={[styles.dayHeading, customStyles.text(17,'light',Colors.thinViolet)]}
           >
          {this.props.dayHeadings[i]}
        </Text>
      );
    }

    return (
      <View style={[styles.calendarHeading, compoundStyles.blackThinVerticalBorder]}>
        {headings}
      </View>
    );
  }

  renderTopBar() {
    let localizedMonth = this.props.monthNames[this.props.currentMoment.month()];
    return (
        <View style={styles.calendarControls}>
          <TouchableOpacity
             onPress={this.onPrev}
             >
               <Icon name="chevron-thin-left" size = {20} style={styles.controlIcon}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.title} onPress={() => this.props.onTitlePress && this.props.onTitlePress()}>
            <Text style={[styles.titleText, customStyles.text(18,'light',Colors.greyViolet)]}>
              {localizedMonth} {this.props.currentMoment.year()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={this.onNext}
             >
               <Icon name="chevron-thin-right" size = {20} style={styles.controlIcon}></Icon>
          </TouchableOpacity>
        </View>
      );
  }

  render() {
    return (
      <View style={styles.calendarContainer}>
        {this.renderTopBar()}
        {this.renderHeading()}
        {this.renderCalendarView(this.props.currentMoment)}
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    currentMoment: state.calendar
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectNextMonth: selectNextMonth,
    selectPreviousMonth: selectPreviousMonth
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

const styles = StyleSheet.create({
  monthContainer: {
    width: DEVICE_WIDTH,
    backgroundColor: Colors.mediumViolet
  },
  calendarControls: {
    flexDirection: 'row',
    backgroundColor: Colors.lightViolet,
    alignItems: 'center'
  },
  controlIcon: {
    margin: 10,
    color: Colors.greyViolet
  },
  title: {
    flex: 1
  },
  titleText: {
    textAlign: 'center',
    marginVertical: 15
  },
  calendarHeading: {
    flexDirection: 'row',
    backgroundColor: Colors.mediumViolet
  },
  dayHeading: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 5,
  },
  weekRow: {
    flexDirection: 'row',
  }
});
