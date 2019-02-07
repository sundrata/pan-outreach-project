import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import personReducer from './personReducer';
import sheetMusicReducer from './sheetMusicReducer';
import tenor from './tenorReducer';
import displayColors from './displayColorsReducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  personReducer, //seperate from user reducer. user reducer only contains logged in accounts info
  sheetMusicReducer // has the 
  tenor, //sets note colors
  displayColors, // boolean of whether to display colors or not
});

export default rootReducer;
