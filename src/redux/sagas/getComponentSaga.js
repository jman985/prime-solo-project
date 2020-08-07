import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

//GET new build data from the database
function* fetchComponent(action){
  try{
      console.log('querying with', action.payload);
      
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/component/' + action.payload, config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_COMPONENT', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchComponentSaga:', error);
  }
}

function* getComponentSaga() {
  yield takeLatest('FETCH_COMPONENT', fetchComponent);
}
  
export default getComponentSaga;