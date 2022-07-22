import { createSlice } from '@reduxjs/toolkit';
import assets from '../../utils/assets.json';

const initialState = {
  myAsset: [],
  allAssets: assets,
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
    removeAsset: (state, { payload }) => {
      state.myAsset = state.myAsset.filter((asset) => (!(asset.id === payload.id)));
    },
    decreaseAssetQnt: (state, { payload }) => {
      const teste = state.allAssets.find((asset) => asset.id === payload.id);
      if (teste) {
        teste.quantity -= payload.quantity;
      } else {
        state.myAsset.push(payload);
      }
    },
    increaseAssetQnt: (state, { payload }) => {
      const teste = state.allAssets.find((asset) => asset.id === payload.id);
      if (teste) {
        teste.quantity += payload.quantity;
      } else {
        state.myAsset.push(payload);
      }
    },
  },
});

export const {
  buyAsset, sellAsset, removeAsset, decreaseAssetQnt, increaseAssetQnt,
} = assetSlice.actions;

export default assetSlice.reducer;
