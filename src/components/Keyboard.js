import React, { Component, PropTypes } from 'react'

class Keyboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { keys, onAddLeft, onRemoveLeft, onAddRight, onRemoveRight } = this.props
    return (
      <div>
        <div className='leftButtons'>
          <button onClick={onAddLeft}>
            +
          </button>
          {' '}
          <button onClick={onRemoveLeft}>
            -
          </button>
        </div>

        <div className='keyboard'>
          {keys.map((data, i) => keyGen(data, keys.slice(0, i).reduce((prev, curr) => {return prev + (curr.keyName ? 1 : 0)}, 0)))}
        </div>

        <div className='rightButtons'>
          <button onClick={onAddRight}>
            +
          </button>
          {' '}
          <button onClick={onRemoveRight}>
            -
          </button>
        </div>
      </div>
    )
  }
}

function keyGen(key, space) {
  return (
    <div className={'key ' + (key.keyName ? 'whiteKey' : 'blackKey')} style={{left: space * 52 - 42/2 + 'px'}}>
      <div className='keyLetter'>
        {key.keyName}
      </div>
    </div>
  )
}

Keyboard.propTypes = {
  keys: PropTypes.array.isRequired,
  onAddLeft: PropTypes.func.isRequired,
  onRemoveLeft: PropTypes.func.isRequired,
  onAddRight: PropTypes.func.isRequired,
  onRemoveRight: PropTypes.func.isRequired
}

export default Keyboard
