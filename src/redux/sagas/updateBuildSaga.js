import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this saga gets fired with every add component action
function* updateCPU(action){
    try {
        yield axios.put('/api/builder/cpu', action.payload);
        yield put({ type: 'SET_BUILD' });
    }  catch (error) {
        console.log('Error with skill update:', error);
    }
}



//this saga gets fired with every add component action
function* updateCooler(action){
  try {
      yield axios.put('/api/builder/cooler', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with skill cooler:', error);
  }
}



//this saga gets fired with every add component action
function* updateMobo(action){
  try {
      yield axios.put('/api/builder/mobo', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with skill mobo:', error);
  }
}



//this saga gets fired with every add component action
function* updateCase(action){
  try {
      yield axios.put('/api/builder/case', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with skill case:', error);
  }
}



//this saga gets fired with every add component action
function* updateGPU(action){
  try {
      yield axios.put('/api/builder/gpu', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with skill gpu:', error);
  }
}



//this saga gets fired with every add component action
function* updateStorage(action){
  try {
      yield axios.put('/api/builder/storage', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with storage update :', error);
  }
}



//this saga gets fired with every add component action
function* updateMemory(action){
  try {
      yield axios.put('/api/builder/memory', action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with memory update:', error);
  }
}

//this saga gets fired with every add component action
function* updatePSU(action){
  try {
      yield axios.put('/api/builder/psu',action.payload);
      yield put({ type: 'SET_BUILD' });
  }  catch (error) {
      console.log('Error with psu update:', error);
  }
}


function* updateBuildSaga() {
yield takeLatest('UPDATE_CPU', updateCPU);
yield takeLatest('UPDATE_COOLER', updateCooler);
yield takeLatest('UPDATE_MOBO', updateMobo);
yield takeLatest('UPDATE_CASE', updateCase);
yield takeLatest('UPDATE_GPU', updateGPU);
yield takeLatest('UPDATE_STORAGE', updateStorage);
yield takeLatest('UPDATE_MEMORY', updateMemory);
yield takeLatest('UPDATE_PSU', updatePSU);

}

export default updateBuildSaga;