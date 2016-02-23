import React, { Component, PropTypes } from 'react'


const Keyboard = ({
  keys, onAddLeft, onRemoveLeft, onAddRight, onRemoveRight
}) => (
  <div className='keyboardArea'>
    <div className='arrowHolder'>
      <div className='arrow leftArrow' onClick={onAddLeft}></div>
      <div className='arrow rightArrow' onClick={onRemoveLeft}></div>
    </div>

    <div className='keyboard'>
      {keys.map((data, i) => keyGen(data, keys.slice(0, i).reduce((prev, curr) => {return prev + (curr.keyName ? 1 : 0)}, 0)))}
    </div>

    <div className='arrowHolder'>
      <div className='arrow leftArrow' onClick={onRemoveRight}></div>
      <div className='arrow rightArrow' onClick={onAddRight}></div>
    </div>
  </div>
)

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
