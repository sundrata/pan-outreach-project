const sheetMusic = (state = [], action) => {
    switch(action.type) {
        case 'SET_SHEET_MUSIC':
            return action.payload;
        default:
            return state;
    }
};

export default sheetMusic;