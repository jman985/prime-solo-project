import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga will be fired on ADD_ITEM action and axios post to server
function* addBuild(action) {
  try {
    yield axios.post('/api/build', action.payload);
    yield put({type: 'FETCH_BUILD'})
  } catch (error) {
    console.log('error with adding item:', error);
  }
}

function* addBuildSaga() {
  yield takeLatest('ADD_BUILD', addBuild);
}

export default addBuildSaga;