import { handleActions } from 'redux-actions';

import * as actions from 'redux/actions';

const DEFAULT_STATE = {
  weatherList: [],
  isLoading: false,
  isOpenWeather: false,
  error: null,
};


const weatherReducer = handleActions(
  {
    [actions.GET_OPEN_WEATHER_REQUEST]: (state: any) => ({
      ...state,
      isLoading: true,
      isOpenWeather: true,
    }),
    [actions.GET_OPEN_WEATHER_SUCCESS]: (state: any, {payload}: any) => ({
      ...state,
      weatherList: payload,
      isLoading: false,
      isOpenWeather: true,
    }),
    [actions.GET_OPEN_WEATHER_FAIL]: (state: any, {payload}: any) => ({
      ...state,
      isLoading: false,
      error: payload,
      isOpenWeather: true,
    }),
  },
  DEFAULT_STATE,
);

export default weatherReducer;
