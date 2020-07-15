import * as ActionTypes from './ActionTypes';

export const Github = (
  state = { loading: true, errMess: null, repos: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_GITHUB:
      return { ...state, loading: false, repos: action.payload };
    case ActionTypes.GIT_FAILED:
      return { ...state, loading: false, repos: [], errMess: action.payload };
    default:
      return { ...state };
  }
};
