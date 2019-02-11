const displayNotes = (state = 'note-text', action) => {
  switch (action.type) {
    case 'SHOW_NOTES':
      return 'note-text';
    case 'HIDE_NOTES':
      return 'hidden-note-text';
    default:
      return state;
  }
};

export default displayNotes;

