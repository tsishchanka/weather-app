import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import getWeatherWatcher from '../sagas/watchers';

function* rootSaga() {
  yield all([getWeatherWatcher()]);
}

export default rootSaga;
