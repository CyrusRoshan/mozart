// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Keyboard from './components/Keyboard'
import keyboard from './reducers'
import './style.css'

const store = createStore(keyboard)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Keyboard
      onKeyPress={() => console.log('asdf')}
      keys={store.getState()}
      onAddLeft={() => store.dispatch({ type: 'ADD_LEFT' })}
      onRemoveLeft={() => store.dispatch({ type: 'REMOVE_LEFT' })}
      onAddRight={() => store.dispatch({ type: 'ADD_RIGHT' })}
      onRemoveRight={() => store.dispatch({ type: 'REMOVE_RIGHT' })}
      onPlayKey={(key) => store.dispatch({ type: 'PLAY_KEY', key })}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
