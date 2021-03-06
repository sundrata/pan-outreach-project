import COLORS from '../../constants/colors';

const colors = {
  A3: COLORS.blue,
  A4: COLORS.blue,
  B3: COLORS.violet,
  Bb3: COLORS.pink,
  B4: COLORS.violet,
  Bb4: COLORS.pink,
  C3: COLORS.red,
  CSh3: COLORS.orangeRed,
  C4: COLORS.red,
  CSh4: COLORS.orangeRed,
  C5: COLORS.red,
  CSh5: COLORS.orangeRed,
  D3: COLORS.orange,
  D4: COLORS.orange,
  D5: COLORS.orange,
  E3: COLORS.yellow,
  Eb3: COLORS.maroon,
  E4: COLORS.yellow,
  Eb4: COLORS.maroon,
  F3: COLORS.green,
  FSh3: COLORS.mint,
  F4: COLORS.green,
  FSh4: COLORS.mint,
  G3: COLORS.indigo,
  GSh3: COLORS.aqua,
  G4: COLORS.indigo,
  GSh4: COLORS.aqua,
}

// create noColor object with notes as keys, 'white' as values
const noColors = {};
let noteArray = ['A3', 'A4', 'B3', 'B4', 'Bb3', 'Bb4', 'C3', 'C4', 'C5', 'CSh3', 'CSh4',
  'CSh5', 'D3', 'D4', 'D5', 'E3', 'E4', 'Eb3', 'Eb4', 'F3', 'F4', 'FSh3',
  'FSh4', 'G3', 'G4', 'GSh3', 'GSh4'];
for (const note of noteArray) {
  noColors[note] = COLORS.colorless
}


const celloReducer = (state = colors, action) => {
  switch (action.type) {
    case 'SHOW_COLORS':
      return colors;
    case 'HIDE_COLORS':
      return noColors;
    case 'SET_CELLO_COLOR':
      return {
        ...state,
        [action.payload.note]: action.payload.color
      }
    default:
      return state;
  }
};

export default celloReducer;
