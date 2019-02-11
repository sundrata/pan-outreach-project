import COLORS from '../../constants/colors';

const colors = {
  A2: COLORS.blue,
  B2: COLORS.pink,
  Bb2: COLORS.pink,
  C2: COLORS.red,
  CSh2: COLORS.orangeRed,
  C3: COLORS.red,
  CSh3: COLORS.orangeRed,
  D2: COLORS.orange,
  D3: COLORS.orange,
  E2: COLORS.yellow,
  Eb2: COLORS.maroon,
  E3: COLORS.yellow,
  Eb3: COLORS.maroon,
  F2: COLORS.green,
  FSh2: COLORS.mint,
  F3: COLORS.green,
  G2: COLORS.indigo,
  GSh2: COLORS.aqua,
}

// create noColor object with notes as keys, 'white' as values
const noColors = {};
let noteArray = ['A2', 'B2', 'Bb2', 'C2', 'C3', 'CSh2', 'CSh3', 'D2', 'D3', 'E2', 'E3',
  'Eb2', 'Eb3', 'F2', 'F3', 'FSh2', 'G2', 'GSh2'];
for (const note of noteArray) {
  noColors[note] = COLORS.colorless
}


const bassReducer = (state = colors, action) => {
  switch (action.type) {
    case 'SHOW_COLORS':
      return colors;
    case 'HIDE_COLORS':
      return noColors;
    case 'SET_BASS_COLOR':
      return {
        ...state,
        [action.payload.note]: action.payload.color
      }
    default:
      return state;
  }
};

export default bassReducer;
