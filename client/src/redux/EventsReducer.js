import * as ActionTypes from './ActionTypes';

export const Events = (
  state = { loading: true, errMess: null, events: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_EVENT:
      return {
        ...state,
        errMess: null,
        events: action.payload,
        loading: false,
      };

    case ActionTypes.EVENT_FAILED:
      return { ...state, errMess: action.payload, events: [] };
    default:
      return state;
  }
};
