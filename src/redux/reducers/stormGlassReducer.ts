import {DEFAULT_STATE} from 'constants/defaultState';

import { handleActions } from 'redux-actions';

import * as actions from 'redux/actions';

const DEF = {
  weatherInfo: [],
  isLoading: false,
  location: '',
  error: null,
};

const stormGlassReducer = handleActions(
  {
    [actions.GET_STORM_REQUEST]: (state: any) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_STORM_SUCCESS]: (state: any, { payload }: any) => {

      const { hours, location } = payload;
      console.log('SW hours', payload?.hours);
      console.log('SW location', payload?.location);
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

  DEF,
);

export default stormGlassReducer;
