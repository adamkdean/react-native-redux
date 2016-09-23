import * as types from './actionTypes'

export function goToBlue(navigator) {
  return {
    type: types.GO_TO_BLUE,
    navigator
  }
}

export function goToRed(navigator) {
  return {
    type: types.GO_TO_RED,
    navigator
  }
}
