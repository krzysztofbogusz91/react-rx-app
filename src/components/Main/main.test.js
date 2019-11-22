import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import TestRenderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './main';
import { getHeroesAction } from '../../actions';

const { act, create } = TestRenderer;
const mockStore = configureStore([thunk]);

describe('Main', () => {
  let container = null;
  let component = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('should get data from api', () => {
    const fakeResponse = [{ name: 'Person 1', species: [] }, { name: 'Person 2', species: [] }];

    act(() => {
      const store = mockStore({ team: [], list: [...fakeResponse] });
      component = create(
        <Provider store={store}>
          <Main team={[]} listOfHeroes={[]} />
        </Provider>,
      );
      getHeroesAction();
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
