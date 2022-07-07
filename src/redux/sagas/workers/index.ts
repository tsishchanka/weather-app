import {  call, put } from 'redux-saga/effects';


import getOpenWeatherData from 'service';

import getStormGlassData from 'service/weatherStormglass';

import * as actions from '../../actions';

type WeatherData = any;
type ReturnData = any;
type PayloadData = any;


export function* getWeatherWorker({payload}: any): Generator<
  WeatherData,
  ReturnData,
  PayloadData
>{
  try {
    const response = yield call(getOpenWeatherData, payload);
    yield put(actions.GET_OPEN_WEATHER_SUCCESS(response));

  } catch (error)
  {
    yield put(actions.GET_OPEN_WEATHER_FAIL(error));
  }
}


export function* getStormGlassWorker({payload}: any): Generator<
  WeatherData,
  ReturnData,
  PayloadData
  >{
  try{

    const response = yield call(getStormGlassData, payload);
    console.log('STORM WORK response', response);
    yield put(actions.GET_STORM_SUCCESS(response));
  } catch (error)
  {
    yield put(actions.GET_STORM_FAIL(error));
  }
}
