import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from "redux-saga";

function* playNote(action) {
  const highlightDelay = 500; // delay in milliseconds
  try {
    yield put({
      type: 'SET_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.highlight
      }
    });
    yield call(delay, highlightDelay); // Wait 0.5 seconds
    yield put({
      type: 'SET_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.color
      }
    });
  } catch (error) {
    console.log('Error with tenor saga:', error);
  }
}

function* tenorSaga() {
  yield takeEvery('PLAY_NOTE', playNote);
}

export default tenorSaga;
