import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
