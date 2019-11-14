import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import heroApp from './reducers/reducers';

const store = createStore(heroApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
