import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from "redux-saga";

const highlightDelay = 500; // delay in milliseconds

function* playTenorNote(action) {
  try {
    yield put({
      type: 'SET_TENOR_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.highlight
      }
    });
    yield call(delay, highlightDelay); // Wait 0.5 seconds
    yield put({
      type: 'SET_TENOR_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.color
      }
    });
  } catch (error) {
    console.log('Error with tenor saga:', error);
  }
}

function* playSecondNote(action) {
  try {
    yield put({
      type: 'SET_SECOND_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.highlight
      }
    });
    yield call(delay, highlightDelay); // Wait 0.5 seconds
    yield put({
      type: 'SET_SECOND_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.color
      }
    });
  } catch (error) {
    console.log('Error with second saga:', error);
  }
}

function* playCelloNote(action) {
  try {
    yield put({
      type: 'SET_CELLO_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.highlight
      }
    });
    yield call(delay, highlightDelay); // Wait 0.5 seconds
    yield put({
      type: 'SET_CELLO_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.color
      }
    });
  } catch (error) {
    console.log('Error with cello saga:', error);
  }
}

function* playBassNote(action) {
  try {
    yield put({
      type: 'SET_BASS_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.highlight
      }
    });
    yield call(delay, highlightDelay); // Wait 0.5 seconds
    yield put({
      type: 'SET_BASS_COLOR',
      payload: {
        note: action.payload.note,
        color: action.payload.color
      }
    });
  } catch (error) {
    console.log('Error with bass saga:', error);
  }
}

function* noteSaga() {
  yield takeEvery('PLAY_TENOR_NOTE', playTenorNote);
  yield takeEvery('PLAY_SECOND_NOTE', playSecondNote);
  yield takeEvery('PLAY_CELLO_NOTE', playCelloNote);
  yield takeEvery('PLAY_BASS_NOTE', playBassNote);
}

export default noteSaga;
