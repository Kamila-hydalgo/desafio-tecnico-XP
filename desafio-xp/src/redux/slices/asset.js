import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myAsset: [],
};

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    buyAsset: (state, action) => {
      state.myAsset.push(action.payload);
    },
    sellAsset: (state, action) => {
      state.myAsset = state.myAsset.filter((asset) => (!(asset.id === action.payload.id)));
    },
  },
});

export const { buyAsset, sellAsset } = assetSlice.actions;

export default assetSlice.reducer;
