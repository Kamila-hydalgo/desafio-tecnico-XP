import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myAsset: [],
};

export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    buyAsset: (state, action) => {
      const findAsset = state.myAsset.find((asset) => asset.id === action.payload.id);
      if (findAsset) {
        findAsset.quantity += action.payload.quantity;
      } else {
        state.myAsset.push(action.payload);
      }
    },
    sellAsset: (state, { payload }) => {
      const findAsset = state.myAsset.find((asset) => asset.id === payload.id);
      if (findAsset) {
        findAsset.quantity -= payload.quantity;
      } else {
        state.myAsset.push(payload);
      }
    },
  },
});

export const { buyAsset, sellAsset } = assetSlice.actions;

export default assetSlice.reducer;
