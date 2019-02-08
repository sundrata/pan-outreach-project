const isTouch = (state = true, action) => {
  switch (action.type) {
    case 'IS_TOUCH_DEVICE':
      return action.payload;
    default:
      return state;
  }
};

export default isTouch;
