import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import {getWeatherWatcher, geStormGlassWatcher} from '../sagas/watchers';

function* rootSaga() {
  yield all([getWeatherWatcher(), geStormGlassWatcher()]);
}

export default rootSaga;
