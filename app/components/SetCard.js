'use strict'

import React, { PropTypes, Component} from 'react'

import {
  View, Text, StyleSheet
} from 'react-native'

import {Colors} from '../common/constStyles';
import { customStyles} from '../common/customStyles';
import { compoundStyles} from '../common/compoundStyles';


export default class SetCard extends Component {
  constructor(props) {
     super(props);
   }

   static defaultProps = {
     propStyles: {
       idContainer: {
         backgroundColor: Colors.darkGreen
       },
       weightContainer: {
         backgroundColor: Colors.lightGreen,
       }
     }
   };

  render(){
    const {id, weight, reps, propStyles} = this.props;
    return (
      <View style={[styles.setContainer, propStyles.setContainer]}>
        <View style={[styles.idWeightContainer, propStyles.weightContainer]}>
          <View style={[styles.idContainer, compoundStyles.center,propStyles.idContainer]}>
            <Text style={[styles.idStyle, customStyles.text(12,'light','white')]}>{id}</Text>
          </View>
          <View style={[styles.weightContainer,compoundStyles.center]}>
              <Text style={customStyles.text(17,'light','white')}>{weight} kg</Text>
          </View>
        </View>
        <View style={[styles.repsContainer, compoundStyles.center]}>
          <Text style={customStyles.text(17,'light','white')}>{reps}</Text>
        </View>
      </View>
    )
  }
}

SetCard.propTypes = {
  id: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  propStyles: PropTypes.object
};


const styles = StyleSheet.create({
  setContainer: {
    flexDirection: 'row',
  },
  idWeightContainer: {
    flex: 3,
    flexDirection: 'row',
    borderRadius: 50,
    marginLeft: 20
  },
  idContainer: {
    borderRadius: 50,
    flex: 1
  },
  idStyle: {
    marginVertical: 5
  },
  weightContainer: {
    flex: 5,
  },
  repsContainer: {
    flex: 1,
  }
})
