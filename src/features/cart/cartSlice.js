import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  quantity: null,
  power: null,
  shippingAddress: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.id = action.payload;
    },
    setCartQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setCartPower: (state, action) => {
      state.power = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = { ...action.payload };
    },
  },
});

export const { setCartId, setCartQuantity, setCartPower, setShippingAddress } =
  cartSlice.actions;

export default cartSlice.reducer;
