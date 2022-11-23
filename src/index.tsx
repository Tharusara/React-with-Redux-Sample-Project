import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Routes from './routes'

import reducers from './reducers'
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  </Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
