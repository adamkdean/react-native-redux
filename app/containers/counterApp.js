import React, { Component, Text } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../actions/counterActions'
import Counter from '../components/counter'

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { state, actions } = this.props
    return (
      <CounterApp
          counter={state.count}
          {...actions} />
    )
  }
}

export default connect(
  state => ({
    state: state.counter
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp)
