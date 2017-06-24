import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {customStyles} from '../common/customStyles'
import {Colors} from '../common/constStyles'
import {compoundStyles} from '../common/compoundStyles'

import SetCard from './SetCard'

class ExerciseCard extends Component {
  render(){
    let set = {
      id: 1,
      name: 'Bench Press',
      reps: 10,
      weight: 100
    };
    const customSetStyles = {
      idContainer: {
        backgroundColor: Colors.thinViolet
      },
      weightContainer: {
        backgroundColor: Colors.darkViolet,
      },
      setContainer: {
        marginVertical: 10
      }
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={[styles.titleStyle,customStyles.text(20,'light','white')]}>
          Leg Extension
        </Text>
        <View style={[styles.setsContainer, compoundStyles.blackThinBottomBorder]}>
          <View style={styles.rowContainer}>
            <SetCard
              id={set.id}
              weight={set.weight}
              reps={set.reps}
              propStyles={customSetStyles}>
            </SetCard>
            <SetCard
              id={set.id}
              weight={set.weight}
              reps={set.reps}
              propStyles={customSetStyles}>
            </SetCard>
          </View>
          <View style={styles.rowContainer}>
            <SetCard
              id={set.id}
              weight={set.weight}
              reps={set.reps}
              propStyles={customSetStyles}>
            </SetCard>
            <SetCard
              id={set.id}
              weight={set.weight}
              reps={set.reps}
              propStyles={customSetStyles}>
            </SetCard>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lightViolet
  },
  titleStyle: {
    marginLeft: 20,
    marginTop: 10
  },
  setsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rowContainer: {
    flex: 1,
    marginVertical: 5
  }
})

export default ExerciseCard
