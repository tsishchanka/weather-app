import { DEFAULT_STATE } from 'constants/defaultState';

import { handleActions } from 'redux-actions';

import * as actions from 'redux/actions';



const weatherReducer = handleActions(
  {
    [actions.GET_OPEN_WEATHER_REQUEST]: (state: any) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_OPEN_WEATHER_SUCCESS]: (state: any, { payload }: any) => {

      return ({
        ...state,
        weatherInfo: payload,
        isLoading: false,
      });},
    [actions.GET_OPEN_WEATHER_FAIL]: (state: any, {payload}: any) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  DEFAULT_STATE,
);

export default weatherReducer;
