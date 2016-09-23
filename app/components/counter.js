'use strict'

import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flex: 1
    , alignItems: 'center'
    , justifyContent: 'center'
  },
  button: {
    width: 100
    , height: 30
    , padding: 10
    , backgroundColor: 'lightgray'
    , alignItems: 'center'
    , justifyContent: 'center'
    , margin: 3
  }
})

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { counter, increment, decrement } = this.props
    return (
      <View style={style.view}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>Down</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
