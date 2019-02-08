import COLORS from '../../constants/colors';

const colors = {
  A4: COLORS.blue,
  A5: COLORS.blue,
  B4: COLORS.violet,
  Bb4: COLORS.pink,
  B5: COLORS.violet,
  Bb5: COLORS.pink,
  C4: COLORS.red,
  CSh4: COLORS.orangeRed,
  C5: COLORS.red,
  CSh5: COLORS.orangeRed,
  C6: COLORS.red,
  CSh6: COLORS.orangeRed,
  D4: COLORS.orange,
  D5: COLORS.orange,
  D6: COLORS.orange,
  E4: COLORS.yellow,
  Eb4: COLORS.maroon,
  E5: COLORS.yellow,
  Eb5: COLORS.maroon,
  E6: COLORS.yellow,
  Eb6: COLORS.maroon,
  FSh4: COLORS.mint,
  F4: COLORS.green,
  FSh5: COLORS.mint,
  F5: COLORS.green,
  G4: COLORS.indigo,
  GSh4: COLORS.aqua,
  G5: COLORS.indigo,
  GSh5: COLORS.aqua,
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
    case 'SET_TENOR_COLOR':
      return {
        ...state,
        [action.payload.note]: action.payload.color
      }
    default:
      return state;
  }
};

export default tenorReducer;
