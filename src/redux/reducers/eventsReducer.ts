import { handleActions } from 'redux-actions';

import * as actions from 'redux/actions';

const DEFAULT_EVENTS_STATE = {
  events: [],
  isLoading: false,
  error: null,
};

const eventsReducer = handleActions(
  {
    [actions.GET_EVENTS_REQUEST]: (state: any) => {
      console.log('GET_EVENTS_REQUEST');
      return ({
        ...state,
        isLoading: true,
      });},
    [actions.GET_EVENTS_SUCCESS]: (state: any, { payload }: any) => {
      console.log('payload',payload);

      return ({
        ...state,
        events: payload,
        isLoading: false,
      });
    },
    [actions.GET_EVENTS_FAIL]: (state: any, {payload}: any) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  DEFAULT_EVENTS_STATE,
);

export default eventsReducer;
