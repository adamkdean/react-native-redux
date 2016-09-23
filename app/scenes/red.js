'use strict'

import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as testActions from '../actions/testActions'
import NavTest from '../components/navTest'

class Red extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { store, actions } = this.props

    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <Text>Current: RED</Text>
        <NavTest
            labelText="GO TO BLUE"
            onLabelClick={this._nav(actions.goToBlue)} />
      </View>
    )
  }

  _nav(action) {
    return () => action(this.props.navigator)
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
)(Red)
