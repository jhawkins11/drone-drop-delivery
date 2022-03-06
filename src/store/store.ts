import { combineReducers, configureStore } from '@reduxjs/toolkit';
import address from './slices/addressSlice';

const rootReducer = combineReducers({
  address,
});

export default configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
