import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import {getWeatherWatcher, geStormGlassWatcher, getEventsWatcher} from './watchers';

function* rootSaga() {
  yield all([getWeatherWatcher(), geStormGlassWatcher(), getEventsWatcher()]);
}

export default rootSaga;
