import React, { Component, PropTypes } from 'react'

class Keyboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { keys, onAddLeft, onRemoveLeft, onAddRight, onRemoveRight } = this.props
    return (
      <p>
        <button onClick={onAddLeft}>
          +
        </button>
        {' '}
        <button onClick={onRemoveLeft}>
          -
        </button>
        {keys.map(data => data.key)}
        <button onClick={onAddRight}>
          +
        </button>
        {' '}
        <button onClick={onRemoveRight}>
          -
        </button>
      </p>
    )
  }
}

Keyboard.propTypes = {
  keys: PropTypes.array.isRequired,
  onAddLeft: PropTypes.func.isRequired,
  onRemoveLeft: PropTypes.func.isRequired,
  onAddRight: PropTypes.func.isRequired,
  onRemoveRight: PropTypes.func.isRequired
}

export default Keyboard
