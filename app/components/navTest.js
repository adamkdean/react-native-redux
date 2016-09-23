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
    width: 200
    , height: 40
    , padding: 10
    , backgroundColor: 'lightgray'
    , alignItems: 'center'
    , justifyContent: 'center'
    , margin: 3
  }
})

export default class NavTest extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { labelText, onLabelClick } = this.props
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={onLabelClick} style={styles.button}>
          <Text>{labelText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
