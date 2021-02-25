import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/index';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
 
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>    
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
