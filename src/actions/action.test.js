import { addHero, ADD_TO_CHOSEN } from './actions';

describe('Action', () => {
  it('should add hero', () => {
    const heroMock = { hero: 1 };
    const assertion = addHero(heroMock);
    expect(assertion.type).toBe(ADD_TO_CHOSEN);
  });
});
