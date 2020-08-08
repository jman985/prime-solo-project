import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this saga gets fired with every add component action
function* updateBuild(action){
    try {
        yield axios.put('/api/builder/', action.payload);
        yield put({ type: 'SET_BUILD' });
    }  catch (error) {
        console.log('Error with skill update:', error);
    }
}


function* updateBuildSaga() {
  yield takeLatest('UPDATE_BUILD', updateBuild);
}

export default updateBuildSaga;