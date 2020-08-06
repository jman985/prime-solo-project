import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//GET user builds from the database
function* fetchAllBuilds(action){
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/build', config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_ALLBUILDS', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchBuild Saga:', error);
  }
}

function* getUserBuildsSaga() {
  yield takeLatest('FETCH_ALLBUILDS', fetchAllBuilds);
}
  
export default getUserBuildsSaga;

