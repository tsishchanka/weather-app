import {
  GET_OPEN_WEATHER_REQUEST_ACTION,
  GET_OPEN_WEATHER_SUCCESS_ACTION,
  GET_OPEN_WEATHER_FAIL_ACTION,
} from 'constants/actions';

import { createAction } from 'redux-actions';


export const GET_OPEN_WEATHER_REQUEST = createAction(GET_OPEN_WEATHER_REQUEST_ACTION);
export const GET_OPEN_WEATHER_SUCCESS = createAction(GET_OPEN_WEATHER_SUCCESS_ACTION);
export const GET_OPEN_WEATHER_FAIL = createAction(GET_OPEN_WEATHER_FAIL_ACTION);
