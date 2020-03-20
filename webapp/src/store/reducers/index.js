import { INCREMENT_COUNTER } from '../actions/types';

const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNTER) {
    return {
      count: state.count + 1
    };
  }
  return state;
}

export default rootReducer;