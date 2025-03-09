import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares: Middleware[] = []; // ✅ Explicitly define type as Middleware[]

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
