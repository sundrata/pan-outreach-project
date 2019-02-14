const snackbarReducer = (state = { open: false, message: '' }, action) => {
    switch (action.type) {
      case 'ADD_PERSON_SNACK':
        return { open: true, message: 'School Successfully Added' };
      case 'EDIT_PERSON_SNACK':
        return { open: true, message: 'School Successfully Updated' };
      case 'DELETE_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Succesfully Deleted' };
      case 'ADD_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Succesfully Added' };
      case 'EDIT_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Successfully Updated' };
      case 'HIDE_SNACK':
        return { open: false, message: '' };
      default:
        return state;
    }
  }

  export default snackbarReducer;
