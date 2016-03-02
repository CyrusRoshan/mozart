// @flow
import React, { Component, PropTypes } from 'react';


const Keyboard = React.createClass({

  propTypes: {
    keys: PropTypes.array.isRequired,
    onAddLeft: PropTypes.func.isRequired,
    onRemoveLeft: PropTypes.func.isRequired,
    onAddRight: PropTypes.func.isRequired,
    onRemoveRight: PropTypes.func.isRequired,
    onPlayKey: PropTypes.func.isRequired,
  },

  keyGen: function(key, space) {
    let keyName = 'key ' + (key.white ? 'whiteKey' : 'blackKey');
    let keyStyle = {
      left: space * 52 - 42/2 + 'px'
    };

    return (
      <div className={keyName} style={keyStyle} onClick={this.props.onPlayKey.bind(null, key)}>
        <div className='keyLetter'>
          {key.keyName + key.octave}
        </div>
        <div className='keyKey'>
          {key.key}
        </div>
      </div>
    )
  },

  debug: function(value) {
    console.log('Debug: ' + value);
  },

  componentDidMount: function() {
    window.addEventListener('keydown', this.props.onPlayKey)
  },

  render: function() {
      return (
      <div className='keyboardArea'>
        <div className='arrowHolder'>
          <div className='arrow leftArrow' onClick={this.props.onAddLeft}></div>
          <div className='arrow rightArrow' onClick={this.props.onRemoveLeft}></div>
        </div>

        <div className='keyboard'>
          {this.props.keys.map((data, i) => this.keyGen(data, this.props.keys.slice(0, i).reduce((prev, curr) => {return prev + curr.white}, 0)))}
        </div>

        <div className='arrowHolder'>
          <div className='arrow leftArrow' onClick={this.props.onRemoveRight}></div>
          <div className='arrow rightArrow' onClick={this.props.onAddRight}></div>
        </div>
      </div>
    )
  }
})

export default Keyboard
