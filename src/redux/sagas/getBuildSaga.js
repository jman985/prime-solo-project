import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//GET new build data from the database
function* fetchBuild(action){
  try{
      console.log('querying with', action.payload);
      
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/builder/' + action.payload, config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_BUILD', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchNewBuild Saga:', error);
  }
}

function* getBuildSaga() {
  yield takeLatest('FETCH_BUILD', fetchBuild);
}
  
export default getBuildSaga;