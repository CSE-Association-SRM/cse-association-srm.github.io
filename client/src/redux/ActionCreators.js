import * as ActionTypes from './ActionTypes';
import Axios from 'axios';

//Redux-thunk to fetch dishes
export const fetchEvents = () => async dispatch => {
  try {
    const res = await Axios.get('/events');
    console.log();
    dispatch({
      type: ActionTypes.GET_EVENT,
      payload: res.data,
    });
  } catch (err) {
    var str = 'Right Now Server is unable to load the requested data';
    dispatch({
      type: ActionTypes.EVENT_FAILED,
      payload: str,
    });
  }
};

export const fetchMediumBlogs = () => dispatch => {
  fetch(
    ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fcse-association-srm'
  )
    .then(res => res.json())
    .then(data => {
      const res = data.items; //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !
      dispatch({
        type: ActionTypes.GET_MEDIUM,
        payload: posts,
      });
    })
    .catch();
};

export const fetchGithubRepos = () => async dispatch => {
  try {
    const res = await Axios.get('/github/repos');
    dispatch({
      type: ActionTypes.GET_GITHUB,
      payload: res.data,
    });
  } catch (err) {
    var str = 'Right Now Server is unable to load the requested data';
    dispatch({
      type: ActionTypes.GIT_FAILED,
      payload: str,
    });
  }
};
