import React from 'react';
import { shallow } from 'enzyme';
import { from, asyncScheduler, timer, interval, onErrorResumeNext, of } from "rxjs";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainComponent, search } from './main';
import { observeOn, map } from 'rxjs/operators';

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
  const source$ = from([1, 2, 3, 4, 5], asyncScheduler);
  const result$ = source$.pipe(map(v => v * v));
  const spy = jest.fn(() => null);
  const expectedValues = [1, 4, 9, 16, 25];
  console.log('testing');
  result$.subscribe({
    next: spy,
    complete: () => {
      expect(spy).toHaveBeenCalledTimes(5);
      expectedValues.forEach(v => {
        console.log('v', v);     
        expect(spy).toHaveBeenCalledWith('xds');
      });
      done();
    }
  });
  done();
});