import { takeEvery, call, put } from 'redux-saga/effects';

import * as actions from '../../actions';
import { getWeatherWorker } from '../workers';

function* getWeatherWatcher() {
  yield takeEvery(actions.GET_OPEN_WEATHER_REQUEST, getWeatherWorker);

}
export default getWeatherWatcher;
