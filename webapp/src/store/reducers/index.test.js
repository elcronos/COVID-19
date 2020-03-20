import reducer from '.';
import { INCREMENT_COUNTER } from '../actions/types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      count: 0
    });
  });

  it('should handle INCREMENT_COUNTER', () => {
    expect(
      reducer({ count: 0 }, {
        type: INCREMENT_COUNTER
      })
    ).toEqual({ count: 1 });

    expect(
      reducer({ count: -10 }, {
        type: INCREMENT_COUNTER
      })
    ).toEqual({ count: -9 });
  });
});