'use strict'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../actions/counterActions'
import CounterWidget from '../components/counterWidget'

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { store, actions } = this.props
    return (
      <CounterWidget
        counter={store.count}
        {...actions} />
    )
  }
}

function mapStateToProps(state) {
  return {
    store: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
