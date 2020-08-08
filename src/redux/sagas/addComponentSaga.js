import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga will be fired on ADD_ITEM action and axios post to server
function* editComponent(action) {
  try {
    yield axios.post('/api/component', action.payload);
    yield put({type: 'FETCH_COMPONENT'})
  } catch (error) {
    console.log('error with adding item:', error);
  }
}

function* addBuildSaga() {
  yield takeLatest('ADD_BUILD', addBuild);
}

export default addBuildSaga;