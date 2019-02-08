import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MAINTENANCE" actions
function* fetchLesson() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' }, // ensures that app is looking for JSON
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return shelf information
        // from the server session (req.user)
        
        const response = yield axios.get('api/lesson', config);
        // the session has given us a shelf object
        // with an id, url, and description set the client-side shelf object
        yield put({ type: 'SET_LESSON', payload: response.data });
        console.log(response.data);
        
    } catch (error) {
        console.log('Shelf get request failed', error);
    }
}

function* deleteLesson(action) {
    try {
        yield call(axios.delete, `/api/lesson/${action.payload}`);
        yield put({type: 'FETCH_LESSON'});
    } catch(error) {
        console.log(error);
    }
}

function* postLesson(action){
    yield call(axios.post, '/api/lesson', action.payload);
    yield put({ type: 'FETCH_LESSON' });
}


function* personSaga() {
    yield takeEvery('FETCH_LESSON', fetchLesson);
    yield takeEvery('DELETE_LESSON', deleteLesson);
    yield takeEvery('POST_LESSON', postLesson);

}

export default personSaga;