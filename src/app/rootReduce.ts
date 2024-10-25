import { combineReducers } from '@reduxjs/toolkit';
import form from '../features/form/formSlice';

const rootReduce = combineReducers({ form });

export type RootReduceType = ReturnType<typeof rootReduce>;
export default rootReduce;
