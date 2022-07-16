import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  balance: 100,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    addingMoney: (state, action) => {
      state.balance += action.payload;
    },
  },
});

export const { changeName, changePassword, addingMoney } = userSlice.actions;
export default userSlice.reducer;
