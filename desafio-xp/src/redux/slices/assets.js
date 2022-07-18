import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myAsset: [],
};

export const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    buyAsset: (state, action) => {
      state.myAsset.push(action.payload);
    },
  },
});

export const { buyAsset } = assetSlice.actions;

export default assetSlice.reducer;
