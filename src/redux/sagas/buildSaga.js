import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchBuild(action){
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/build', config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_BUILD', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchBuild Saga:', error);
  }
}

function* buildSaga() {
  yield takeLatest('FETCH_BUILD', fetchBuild);
}
  
export default buildSaga;