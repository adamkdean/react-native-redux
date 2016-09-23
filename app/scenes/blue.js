'use strict'

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as testActions from '../actions/testActions'
import NavTest from '../components/navTest'

class RedScene extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { store, actions } = this.props
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <Text>Current: BLUE</Text>
        <NavTest
            labelText="GO TO RED"
            onLabelClick={actions.goToRed} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    store: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(testActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedScene)
