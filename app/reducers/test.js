import * as types from '../actions/actionTypes'

const initialState = {
  test: 0
}

export default function test(state = initialState, action = {}) {
  switch (action.type) {
    case types.GO_TO_BLUE:
      console.log('go to blue reducer')
      return {
        ...state
      }
    case types.GO_TO_RED:
      console.log('go to red reducer')
      return {
        ...state
      }
    default:
      return state
  }
}
