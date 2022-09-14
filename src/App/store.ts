import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from '../Core/Services/api';
import counterReducer from '../Features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
