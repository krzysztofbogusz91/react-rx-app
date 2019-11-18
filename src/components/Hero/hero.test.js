import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Hero } from './hero';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders', () => {
  const hero = {
    img: 'mockUrl',
    name: 'Mario Mock',
    created: '10.10.2000',
    homeworld: 'World',
    hair_color: 'Red',
    species: ['Human'],
  };
  act(() => {
    render(<Hero person={hero} />, container);
  });
  expect(document.querySelector('.hero_name').textContent).toBe('Name: Mario Mock');
});

it('renders hero with add to list button', () => {
  const isChosen = 0;
  act(() => {
    render(<Hero isChosen={isChosen} />, container);
  });
  expect(document.querySelector('.btn_add')).toBeTruthy();
  expect(document.querySelector('.btn_remove')).toBeFalsy();
});

it('renders hero with remove from list button', () => {
  const isChosen = 1;
  act(() => {
    render(<Hero isChosen={isChosen} />, container);
  });
  expect(document.querySelector('.btn_add')).toBeFalsy();
  expect(document.querySelector('.btn_remove')).toBeTruthy();
});

it('renders hero with add to list button', () => {
  const isChosen = 0;
  act(() => {
    render(<Hero isChosen={isChosen} />, container);
  });
  expect(document.querySelector('.btn_add')).toBeTruthy();
  expect(document.querySelector('.btn_remove')).toBeFalsy();
});
