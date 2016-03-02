// @flow
const piano = Synth.createInstrument('piano');
const keys = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
const keyRow1 = '1234567890-='.split('');
const keyRow2 = 'qwertyuiop[]'.split('');

const initialKeyboard = remapKeys(Array(12).fill(0).map((val, pos) => {
  return {
    keyName: keys[(pos + 3) % 12],
    octave: Math.floor(pos / 12) + 3,
    number: (pos + 3) % 12,
    white: (keys[(pos + 3) % 12].length === 1),
  }
}));

function remapKeys(currentKeys) {
  return currentKeys.map((curr, index) => {
      if (curr.white) { // white keys
        let totalWhiteKeys = currentKeys.reduce((sum, c, i) => {return sum + ((i > index) ? 0 : c.white)}, -1);
        curr.key = (totalWhiteKeys < keyRow2.length) ? keyRow2[totalWhiteKeys] : '';
      } else { // black keys
        let nextBlackKey = index
          ? (currentKeys[index - 1].white
            ? (currentKeys[index - 1].key) ? keyRow2.indexOf(currentKeys[index - 1].key) + 1 : currentKeys.length
            : (currentKeys[index - 1].key) ? keyRow1.indexOf(currentKeys[index - 1].key) : currentKeys.length)
          : 0;
        curr.key = (nextBlackKey < keyRow1.length) ? keyRow1[nextBlackKey] : '';
      }
    return curr;
  });
}

export default function counter(state = initialKeyboard, action) {
  var firstKey = state[0];
  var lastKey = state[state.length - 1];
  switch (action.type) {
    case 'ADD_LEFT':
      var number = firstKey.number;
      var octave = firstKey.octave;
      number ? (number--) : (number = keys.length - 1);
      if (firstKey.keyName === 'C') {
        octave--;
      }
      var currentState = [{keyName: keys[number], octave, number, white: (keys[number].length === 1)}].concat(state);
      return remapKeys(currentState);
    case 'REMOVE_LEFT':
      return remapKeys(state.length - 1 ? state.slice(1) : state);
    case 'ADD_RIGHT':
      var number = lastKey.number;
      var octave = lastKey.octave;
      (number === keys.length - 1) ? (number = 0) : (number++);
      if (lastKey.keyName === 'B') {
        octave++;
      }
      var currentState = state.concat([{keyName: keys[number], octave, number, white: (keys[number].length === 1)}])
      return remapKeys(currentState);
    case 'REMOVE_RIGHT':
      return remapKeys(state.length - 1 ? state.slice(0, -1) : state);
    case 'PLAY_KEY':
      var playedKey;
      if (action.key.octave) {
        playedKey = action.key;
      } else {
        var keyboardLetter = String.fromCharCode(action.key.keyCode).toLowerCase();
        for (var i = 0; i < state.length; i++) {
            if (state[i].key === keyboardLetter) {
              playedKey = state[i];
              break;
            }
        }
        if (!playedKey) {
          return state;
        }
      }
      piano.play(playedKey.keyName.split('/')[0], playedKey.octave, 1);
      return state;
    default:
      return state
  }
}
