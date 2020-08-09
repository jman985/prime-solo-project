import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga will be fired on ADD_BUILD action and axios post to server
function* addBuild(action) {
  try {

    const response = yield axios.post('/api/build', action.payload);
    console.log('response from new build POST', response.data);
    
    yield put({type: 'SELECT_BUILD', payload: response.data.id})
  } catch (error) {
    console.log('error with adding build:', error);
  }
}

function* addBuildSaga() {
  yield takeLatest('ADD_BUILD', addBuild);
}

export default addBuildSaga;