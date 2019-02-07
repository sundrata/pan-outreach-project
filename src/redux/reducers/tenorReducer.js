import COLORS from '../../constants/colors';

const colors = {
  A4: COLORS.blue,
  A5: COLORS.blue,
  B4: COLORS.pink,
  Bb4: COLORS.pink,
  B5: COLORS.pink,
  Bb5: COLORS.pink,
  C4: COLORS.red,
  CSh4: COLORS.red,
  C5: COLORS.red,
  CSh5: COLORS.red,
  C6: COLORS.red,
  CSh6: COLORS.red,
  D4: COLORS.orange,
  D5: COLORS.orange,
  D6: COLORS.orange,
  E4: COLORS.yellow,
  Eb4: COLORS.yellow,
  E5: COLORS.yellow,
  Eb5: COLORS.yellow,
  E6: COLORS.yellow,
  Eb6: COLORS.yellow,
  FSh4: COLORS.green,
  F4: COLORS.green,
  FSh5: COLORS.green,
  F5: COLORS.green,
  G4: COLORS.indigo,
  GSh4: COLORS.indigo,
  G5: COLORS.indigo,
  GSh5: COLORS.indigo,
}

// create noColor object with notes as keys, 'white' as values
const noColors = {};
let noteArray = ['A4', 'A5', 'B4', 'Bb4', 'B5', 'Bb5', 'C4', 'CSh4', 'C5', 'CSh5', 'C6',
  'CSh6', 'D4', 'D5', 'D6', 'E4', 'Eb4', 'E5', 'Eb5', 'E6', 'Eb6', 'F4',
  'FSh4', 'F5', 'FSh5', 'G4', 'GSh4', 'G5', 'GSh5'];
for (const note of noteArray) {
  noColors[note] = COLORS.colorless
}


const tenorReducer = (state = colors, action) => {
  switch (action.type) {
    case 'SHOW_COLORS':
      return colors;
    case 'HIDE_COLORS':
      return noColors;
    case 'SET_COLOR':
      return {
        ...state,
        [action.payload.note]: action.payload.color
      }
    default:
      return state;
  }
};

export default tenorReducer;
