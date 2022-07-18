import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import assets from './slices/assets';

export default configureStore({
  reducer: {
    user,
    assets,
  },
});
