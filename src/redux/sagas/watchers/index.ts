import { takeEvery, call, put,takeLeading } from 'redux-saga/effects';

import * as actions from '../../actions';
import { getWeatherWorker, getStormGlassWorker } from '../workers';

function* getWeatherWatcher() {
  yield takeEvery(actions.GET_OPEN_WEATHER_REQUEST, getWeatherWorker);

}

function* geStormGlassWatcher() {
  yield takeEvery(actions.GET_STORM_REQUEST, getStormGlassWorker);
}

export {getWeatherWatcher, geStormGlassWatcher};
