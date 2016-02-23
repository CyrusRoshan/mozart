const keys = ['A', '', 'B', 'C', '', 'D', '', 'E', 'F', '', 'G', ''];

const initialKeyboard = Array(12).fill(0).map((val, pos) => {
  return {
    keyName: keys[(pos + 3) % 12],
    octave: parseInt(pos / 12),
    number: (pos + 3) % 12
  }
});

export default function counter(state = initialKeyboard, action) {
  console.log(state)
  switch (action.type) {
    case 'ADD_LEFT':
      var number = state[0].number;
      var octave = state[0].octave;
      number ? (number--) : (number = keys.length - 1, octave--);
      return [{keyName: keys[number], octave, number}].concat(state)
    case 'REMOVE_LEFT':
      return state.length - 1 ? state.slice(1) : state
    case 'ADD_RIGHT':
      var number = state[state.length - 1].number;
      var octave = state[state.length - 1].octave;
      (number === keys.length - 1) ? (number = 0, octave++) : (number++);
      return state.concat({keyName: keys[number], octave, number})
    case 'REMOVE_RIGHT':
      return state.length - 1 ? state.slice(0, -1) : state
    default:
      return state
  }
}
