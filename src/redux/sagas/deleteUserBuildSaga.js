import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// delete user build from the database
function* deleteBuild(action) {
    // yield console.log('delete item saga:', action.payload)
  try {
    yield axios.delete('/api/build/' + action.payload);
    yield put({type: 'FETCH_BUILD'})
  } catch (error) {
    console.log('error deleting item:', error);
  }
}

function* deleteUserBuildSaga() {
  yield takeLatest('REMOVE_BUILD', deleteBuild);
}

export default deleteUserBuildSaga;