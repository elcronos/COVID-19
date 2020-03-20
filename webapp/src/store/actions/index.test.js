import { INCREMENT_COUNTER } from './types';
import { incrementCounter } from '.';

describe('Counter actions', () => {
  it('should create action to increment counter', () => {
    const expectedAction = {
      type: INCREMENT_COUNTER
    };
    expect(incrementCounter()).toEqual(expectedAction);
  });
});