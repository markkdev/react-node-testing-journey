import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from '../slices/review';

export function makeStore() {
  return configureStore({
    reducer: { review: reviewReducer },
  });
}

const store = makeStore();

export default store;
