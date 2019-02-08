import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MAINTENANCE" actions
function* fetchCategory() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }, // ensures that app is looking for JSON
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return shelf information
        // from the server session (req.user)
        
        const response = yield axios.get('api/category', config);
        // the session has given us a shelf object
        // with an id, url, and description set the client-side shelf object
        yield put({ type: 'SET_CATEGORY', payload: response.data });
        console.log(response.data);
        
    } catch (error) {
        console.log('Shelf get request failed', error);
    }
}

function* deleteCategory(action) {
    try {
        yield call(axios.delete, `/api/category/${action.payload}`);
        yield put({type: 'FETCH_CATEGORY'});
    } catch(error) {
        console.log(error);
    }
}

function* postCategory(action){
    yield call(axios.post, '/api/category', action.payload);
    yield put({ type: 'FETCH_CATEGORY' });
}


function* categorySaga() {
    yield takeEvery('FETCH_CATEGORY', fetchCategory);
    yield takeEvery('DELETE_CATEGORY', deleteCategory);
    yield takeEvery('POST_CATEGORY', postCategory);

}

export default categorySaga;