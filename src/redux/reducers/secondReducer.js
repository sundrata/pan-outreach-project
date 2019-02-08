import COLORS from '../../constants/colors';

const colors = {
  A3: COLORS.blue,
  A4: COLORS.blue,
  A5: COLORS.blue,
  B3: COLORS.pink,
  Bb3: COLORS.pink,
  B4: COLORS.pink,
  Bb4: COLORS.pink,
  Bb5: COLORS.pink,
  C4: COLORS.red,
  CSh4: COLORS.red,
  C5: COLORS.red,
  CSh5: COLORS.red,
  C6: COLORS.red,
  CSh6: COLORS.red,
  D4: COLORS.orange,
  D5: COLORS.orange,
  E4: COLORS.yellow,
  Eb4: COLORS.yellow,
  E5: COLORS.yellow,
  Eb5: COLORS.yellow,
  F3: COLORS.green,
  FSh3: COLORS.green,
  F4: COLORS.green,
  FSh4: COLORS.green,
  F5: COLORS.green,
  FSh5: COLORS.green,
  G3: COLORS.indigo,
  GSh3: COLORS.indigo,
  G4: COLORS.indigo,
  GSh4: COLORS.indigo,
  G5: COLORS.indigo,
  GSh5: COLORS.indigo,
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
