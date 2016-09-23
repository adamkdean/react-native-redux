'use strict'

import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './app/reducers'
import Red from './app/scenes/red'
import Counter from './app/scenes/counter'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Red />
      </Provider>
    )
  }

  // _configureScene(route, routeStack) {
  //   // SceneConfigs: https://gist.github.com/adamkdean/e14102e4c0170fe0ae553f0eee475170
  //   return (route.type === 'Modal')
  //     ? Navigator.SceneConfigs.FloatFromBottom
  //     : Navigator.SceneConfigs.PushFromRight
  // }
  //
  // _renderScene(route, navigator) {
  //   const props = { ...this.props, ...route.passProps, route, navigator }
  //   return React.createElement(route.component, props)
  // }
}
