import React from 'react';
import { shallow } from 'enzyme';
import { from, asyncScheduler, timer, interval, onErrorResumeNext, of } from "rxjs";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainComponent, search } from './main';
import { observeOn, map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

configure({ adapter: new Adapter() });

xit('it subscribes', (done) => {
  const wrapper = shallow(<MainComponent />);
  const shallowComponent = wrapper.instance();

  shallowComponent.onSearch({ target: { value: 'text' } });
  const stream$ = shallowComponent.search;
  stream$.subscribe((text) => {
    expect(text).toBe('text2');
    done();
  });
});

xit("", () => {
  const wrapper = shallow(<MainComponent />);
  const shallowComponent = wrapper.instance();
  shallowComponent.onSearch({ target: { value: 'text' } });
  const spy = jest.spyOn(shallowComponent, 'callApiToGetHeroes');
  expect(spy).toHaveBeenCalled();
});

it("should test with done callback map(v => v*v)", (done) => {
  const wrapper = shallow(<MainComponent />);
  const shallowComponent = wrapper.instance();
  shallowComponent.onSearch({ target: { value: 'text' } });
  const source$ = of('1');
  const result$ = source$.pipe(debounceTime(6500),observeOn(asyncScheduler));
  const spy = jest.fn(() => null);

  console.log('testing');
  result$.subscribe({
    next: spy,
    complete: () => {
      console.log('testing body');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('1');
      done();
    }
  });
});

it("should test with done callback map(v => v*v)", (done) => {
  const wrapper = shallow(<MainComponent />);
  const shallowComponent = wrapper.instance();
  shallowComponent.onSearch({ target: { value: 'text' } });
  const source$ = shallowComponent.search;
  const result$ = source$.pipe(observeOn(asyncScheduler));
  const spy = jest.fn(() => null);

  console.log('testing 2');
  result$.subscribe({
    next: spy,
    complete: () => {
      console.log('testing body2');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('no text');
      done();
    }
  });
});