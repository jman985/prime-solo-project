import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getUserBuildsSaga from './getUserBuildsSaga';
import deleteUserBuildSaga from './deleteUserBuildSaga';
import getNewBuildSaga from './getNewBuildSaga';
import addBuildSaga from './addBuildSaga';
import getBuildSaga from './getBuildSaga';
import getComponentSaga from './getComponentSaga';
import updateBuildSaga from './updateBuildSaga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getUserBuildsSaga(),
    deleteUserBuildSaga(),
    getNewBuildSaga(),
    addBuildSaga(),
    getBuildSaga(),
    getComponentSaga(),
    updateBuildSaga()
  ]);
}
