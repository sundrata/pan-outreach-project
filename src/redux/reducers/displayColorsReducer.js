const displayColors = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_COLORS':
      return true;
    case 'HIDE_COLORS':
      return false;
    default:
      return state;
  }
};

export default displayColors;
