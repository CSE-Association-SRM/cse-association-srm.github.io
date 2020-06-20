import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
