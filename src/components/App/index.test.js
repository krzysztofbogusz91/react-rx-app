import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './index';
import heroApp from '../../reducers/reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(heroApp, applyMiddleware(thunk));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
