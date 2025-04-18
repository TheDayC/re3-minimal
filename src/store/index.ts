import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import gameReducer from './slices/game';

export const store = configureStore({
    reducer: {
        game: gameReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
