import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalSignInOpen: false,
  modalSignUpOpen: false,
  modalLogoutOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalSignInOpen(state, action) {
      state.modalSignInOpen = action.payload;
    },
    setModalSignUpOpen(state, action) {
      state.modalSignUpOpen = action.payload;
    },
    setModalLogoutOpen(state, action) {
      state.modalLogoutOpen = action.payload;
    },
  },
});

export const { setModalSignInOpen, setModalSignUpOpen, setModalLogoutOpen } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
