import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/slice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
