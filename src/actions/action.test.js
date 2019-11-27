import { addHero, getWorlds } from './index';
import { ADD_TO_CHOSEN } from './types';

describe('Action', () => {
  it('should add hero', () => {
    const heroMock = { hero: 1 };
    const assertion = addHero(heroMock);
    expect(assertion.type).toBe(ADD_TO_CHOSEN);
  });
});

fit('should make api call', () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

  getWorlds([]).subscribe((data) => {
    expect(data.length).toBe(2);
  });
});
