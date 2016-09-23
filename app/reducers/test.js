import * as types from '../actions/actionTypes'
import Red from '../scenes/red'
import Blue from '../scenes/blue'

export default function test(state = {}, action = {}) {
  switch (action.type) {
    case types.GO_TO_BLUE:
      action.navigator.push({
        component: Blue,
        type: 'Scene',
        passProps: {}
      })
      return state

    case types.GO_TO_RED:
      action.navigator.push({
        component: Red,
        type: 'Scene',
        passProps: {}
      })
      return state

    default:
      return state
  }
}
