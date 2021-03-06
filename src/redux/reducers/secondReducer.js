import COLORS from '../../constants/colors';

const colors = {
  A3: COLORS.blue,
  A4: COLORS.blue,
  A5: COLORS.blue,
  B3: COLORS.violet,
  Bb3: COLORS.pink,
  B4: COLORS.violet,
  Bb4: COLORS.pink,
  Bb5: COLORS.pink,
  C4: COLORS.red,
  CSh4: COLORS.orangeRed,
  C5: COLORS.red,
  CSh5: COLORS.orangeRed,
  C6: COLORS.red,
  CSh6: COLORS.orangeRed,
  D4: COLORS.orange,
  D5: COLORS.orange,
  E4: COLORS.yellow,
  Eb4: COLORS.maroon,
  E5: COLORS.yellow,
  Eb5: COLORS.maroon,
  F3: COLORS.green,
  FSh3: COLORS.mint,
  F4: COLORS.green,
  FSh4: COLORS.mint,
  F5: COLORS.green,
  FSh5: COLORS.mint,
  G3: COLORS.indigo,
  GSh3: COLORS.aqua,
  G4: COLORS.indigo,
  GSh4: COLORS.aqua,
  G5: COLORS.indigo,
  GSh5: COLORS.aqua,
}

// create noColor object with notes as keys, 'white' as values
const noColors = {};
let noteArray = ['A3', 'A4', 'A5', 'B3', 'B4', 'Bb3', 'Bb4', 'Bb5', 'C4', 'C5', 'CSh4',
  'CSh5', 'D4', 'D5', 'E4', 'E5', 'Eb4', 'Eb5', 'F3', 'F4', 'F5', 'FSh3',
  'FSh4', 'FSh5', 'G3', 'G4', 'G5', 'GSh3', 'GSh4', 'GSh5'];
for (const note of noteArray) {
  noColors[note] = COLORS.colorless
}


const secondReducer = (state = colors, action) => {
  switch (action.type) {
    case 'SHOW_COLORS':
      return colors;
    case 'HIDE_COLORS':
      return noColors;
    case 'SET_SECOND_COLOR':
      return {
        ...state,
        [action.payload.note]: action.payload.color
      }
    default:
      return state;
  }
};

export default secondReducer;
