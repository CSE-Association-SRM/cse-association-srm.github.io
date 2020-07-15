import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Events } from './EventsReducer';
import { medium } from './MediumReducer';
import { Github } from './GithubReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      events: Events,
      medium: medium,
      github: Github,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  return store;
};
