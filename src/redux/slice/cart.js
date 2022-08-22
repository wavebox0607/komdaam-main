import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    cartOpen: false,
  },
  reducers: {
    addToCartList: (state, action) => {
      // const cartItem = state.cartList?.find((item) => item.id === action.payload.id & item.color === action.payload.color && item.size === action.payload.size);
      const cartItem = state.cartList?.find(
        (item) =>
          item.id === action.payload.cartId &&
          item.size === action.payload.size &&
          item.color === action.payload.color &&
          item.unit === action.payload.unit &&
          item.volume === action.payload.volume
      );

      if (cartItem) {
        cartItem.qty = action.payload.qty
          ? cartItem.qty + action.payload.qty
          : cartItem.qty + 1;
      } else {
        state.cartList.push({
          ...action.payload,
          qty: action.payload.qty || 1,
        });
      }
    },
    incrementQty: (state, action) => {
      const cartItem = state.cartList?.find(
        (item) => item.cartId === action.payload
      );
      if (cartItem) {
        cartItem.qty = cartItem.qty + 1;
        toast("Add to cart z successfully!", {
          type: "success",
        });
      }
    },

    decrementQty: (state, action) => {
      const cartItem = state.cartList.find(
        (item) => item.cartId === action.payload
      );

      if (cartItem.qty === 1) {
        state.cartList = state.cartList.filter(
          (i) => i.cartId !== action.payload
        );
        toast("Remove from cart successfully!", {
          type: "warning",
        });
      }

      if (cartItem.qty > 1) {
        cartItem.qty = cartItem.qty - 1;
        toast("Remove from cart successfully!", {
          type: "warning",
        });
      }
    },

    // Remove single product from cart List
    removeToCartList: (state, action) => {
      state.cartList = state.cartList.filter(
        (items) => items.cartId !== action.payload?.cartId
      );
    },

    // delete all product in cart List
    clearCartList: (state) => {
      state.cartList = [];
    },

    // Right side Cart open / close
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const {
  addToCartList,
  removeToCartList,
  incrementQty,
  decrementQty,
  clearCartList,
  toggleCart,
  setLanguage,
} = cartSlice.actions;

export default cartSlice.reducer;
