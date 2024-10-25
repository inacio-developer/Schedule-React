import { configureStore } from '@reduxjs/toolkit';
import rootReduce from './rootReduce';

const store = configureStore({
  reducer: rootReduce
});

export default store;
