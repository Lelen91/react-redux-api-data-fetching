import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { sortReducer } from '../features/sort/sortSlicer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    sort: sortReducer
  },
});
