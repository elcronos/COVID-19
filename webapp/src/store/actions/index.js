import { INCREMENT_COUNTER } from './types';

export function incrementCounter(payload) {
  return { type: INCREMENT_COUNTER, payload };
}