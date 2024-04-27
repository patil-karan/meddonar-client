import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: localStorage.getItem("productId"),
  quantity: localStorage.getItem("cartQuantity"),
  power: localStorage.getItem("cartPower"),
  shippingAddress: localStorage.getItem("shippingAddress"),
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
      state.shippingAddress = action.payload;
    },
  },
});

export const { setCartId, setCartQuantity, setCartPower, setShippingAddress } =
  cartSlice.actions;

export default cartSlice.reducer;
