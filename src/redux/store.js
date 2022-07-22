import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import asset from './slices/asset';

export default configureStore({
  reducer: {
    user,
    asset,
  },
});
