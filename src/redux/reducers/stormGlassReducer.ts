import {DEFAULT_STATE} from 'constants/defaultState';

import { handleActions } from 'redux-actions';

import * as actions from 'redux/actions';


const stormGlassReducer = handleActions(
  {
    [actions.GET_STORM_REQUEST]: (state: any) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_STORM_SUCCESS]: (state: any, { payload }: any) => {

      const { hours, location } = payload;
      return ({
        ...state,
        weatherInfo: hours[0]?.airTemperature[0].value.toFixed(),
        location,
        isLoading: false,
      });
    },

    [actions.GET_STORM_FAIL]: (state: any, {payload}: any) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },

  DEFAULT_STATE,
);

export default stormGlassReducer;
