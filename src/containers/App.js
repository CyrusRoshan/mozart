// @flow
import React, { Component } from 'react'
import Keyboard from '../components/Keyboard'
//import MainSection from '../components/MainSection'
//import * as TodoActions from '../actions'

export default class App extends Component {
  render() {
    const { keys, actions } = this.props
    return (
      <div>
        //<Header addKey={actions.addKey} />
        <Keyboard keys={keys} actions={actions} />
      </div>
    )
  }
}
