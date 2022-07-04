import { takeEvery, call, put } from 'redux-saga/effects';

import { DateTime } from 'luxon';

import * as actions from '../../actions';

import getFormattedWeatherData from '../../../api'


const API_KEY = 'b97193ccd829d8b46f2dc8c92b121ca0';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

type WeatherData = any;
type ReturnData = any;
type PayloadData = object;


export function* getWeatherWorker({payload}: any): Generator<
  WeatherData,
  ReturnData,
  PayloadData
>{
  try
  {
    const response = yield call (getFormattedWeatherData, payload);
    yield put(actions.GET_OPEN_WEATHER_SUCCESS(response));
  } catch (error)
  {
    yield put(actions.GET_OPEN_WEATHER_FAIL(error));
  }
}
