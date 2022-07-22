import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  balance: 1000,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.email = action.payload;
    },
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    withdrawMoney: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const {
  changeName, changePassword, addMoney, withdrawMoney,
} = userSlice.actions;

export default userSlice.reducer;
