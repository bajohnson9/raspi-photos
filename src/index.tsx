import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomeScreen from './components/home';

ReactDOM.render(
  <React.StrictMode>
    <HomeScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);