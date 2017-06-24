import React from 'react'
import {StyleSheet} from 'react-native'

export const compoundStyles = StyleSheet.create({
  blackThinVerticalBorder: {
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderTopColor: 'black',
    borderBottomColor: 'black'
  },
  blackThinRightBorder: {
    borderRightWidth: 0.7,
    borderRightColor: 'black'
  },
  blackThinBottomBorder:{
    borderBottomWidth: 0.7,
    borderBottomColor: 'black'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
