// step 1: make store through configure store
// step 2: make slices

import {configureStore} from '@reduxjs/toolkit';
import todoReducre from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducre
});