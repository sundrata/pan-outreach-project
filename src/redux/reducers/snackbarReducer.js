const snackbarReducer = (state = { open: false, message: '', class:'' }, action) => {
    switch (action.type) {
      case 'ADD_PERSON_SNACK':
        return { open: true, message: 'School Successfully Added' };
      case 'EDIT_PERSON_SNACK':
        return { open: true, message: 'School Successfully Updated' };
      case 'DELETE_PERSON_SNACK':
        return { open: true, message: 'School Successfully Deleted', class: '.del'};   
      case 'DELETE_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Succesfully Deleted' };
      case 'ADD_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Succesfully Added' }; 
      case 'EDIT_MUSIC_SNACK':
        return { open: true, message: 'Sheet Music Succesfully Updated' };   
      case 'DELETE_LESSON_SNACK':
        return { open: true, message: 'Lesson Plan Succesfully Deleted' };
      case 'ADD_LESSON_SNACK':
        return { open: true, message: 'Lesson Plan Succesfully Added' }; 
      case 'EDIT_LESSON_SNACK':
        return { open: true, message: 'Lesson Plan Succesfully Updated' };     

      case 'HIDE_SNACK':
        return { open: false, message: '' };  
      default:
        return state;
    }
  }
  
  export default snackbarReducer;