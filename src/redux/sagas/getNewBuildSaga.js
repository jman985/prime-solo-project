import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//GET new build data from the database
function* fetchNewBuild(action){
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/newbuild', config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_NEWBUILD', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchNewBuild Saga:', error);
  }
}

function* getNewBuildSaga() {
  yield takeLatest('FETCH_NEWBUILD', fetchNewBuild);
}
  
export default getNewBuildSaga;