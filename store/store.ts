import { configureStore, Middleware } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares: Middleware[] = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
