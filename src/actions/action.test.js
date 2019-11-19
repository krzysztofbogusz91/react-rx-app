import { addHero } from './index';
import { ADD_TO_CHOSEN } from './types';

describe('Action', () => {
  it('should add hero', () => {
    const heroMock = { hero: 1 };
    const assertion = addHero(heroMock);
    expect(assertion.type).toBe(ADD_TO_CHOSEN);
  });
});
