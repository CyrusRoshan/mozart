const initialKeyboard = [
  {
    key: 'C',
    octave: 0,
    number: 3
  },
  {
    key: '',
    octave: 0,
    number: 4
  },
  {
    key: 'D',
    octave: 0,
    number: 5
  },
  {
    key: '',
    octave: 0,
    number: 6
  },
  {
    key: 'E',
    octave: 0,
    number: 7
  },
  {
    key: 'F',
    octave: 0,
    number: 8
  },
  {
    key: 'G',
    octave: 0,
    number: 9
  },
  {
    key: '',
    octave: 0,
    number: 10
  },
  {
    key: 'A',
    octave: 0,
    number: 1
  },
  {
    key: 'B',
    octave: 0,
    number: 2
  },
];

const keys = ['A', '', 'B', 'C', '', 'D', '', 'E', 'F', 'G', ''];

export default function counter(state = initialKeyboard, action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_LEFT':
      var number = state[0].number;
      var octave = state[0].octave;
      number ? (number--) : (number = keys.length - 1, octave--);
      return [{key: keys[number], octave, number}].concat(state)
    case 'REMOVE_LEFT':
      return state.slice(1)
    case 'ADD_RIGHT':
      var number = state[state.length - 1].number;
      var octave = state[state.length - 1].octave;
      (number === keys.length - 1) ? (number = 0, octave++) : (number++);
      return state.concat({key: keys[number], octave, number})
    case 'REMOVE_RIGHT':
      return state.slice(0, -1)
    default:
      return state
  }
}
