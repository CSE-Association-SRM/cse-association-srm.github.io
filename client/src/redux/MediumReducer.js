import * as ActionTypes from './ActionTypes';

export const medium = (
  state = { loading: true, errMsg: null, blogs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_MEDIUM:
      return { ...state, blogs: action.payload, loading: false };
    case ActionTypes.MEDIUM_FAILED:
      return {
        ...state,
        blogs: [],
        errMess:
          'Rightnow we are unable to load our blogs . Try visiting our Medium Publication page',
      };
    default:
      return { ...state };
  }
};
