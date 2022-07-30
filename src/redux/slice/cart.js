import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    cartOpen: false,
  },
  reducers: {
    addToCartList: (state, action) => {

      const cartItem = state.cartList?.find((item) => item.id === action.payload.id && item.productId === action.payload.productId && item.id === action.payload.id)

      if (cartItem) {
        cartItem.qty = action.payload.qty ? cartItem.qty + action.payload.qty : cartItem.qty + 1;
      } else {
        state.cartList.push({ ...action.payload, qty: action.payload.qty || 1 });
      }
    },
    incrementQty: (state, action) => {
      const cartItem = state.cartList?.find((item) => item.cartId === action.payload);
      if (cartItem) {
        cartItem.qty = cartItem.qty + 1;
      }
    },

    decrementQty: (state, action) => {
      const cartItem = state.cartList.find((item) => item.cartId === action.payload);


      if (cartItem.qty === 1) {
        state.cartList = state.cartList.filter(i => i.cartId !== action.payload)
      }
      if (cartItem.qty > 1) {
        cartItem.qty = cartItem.qty - 1;
      }
    },

    removeToCartList: (state, action) => {
      state.cartList = state.cartList.filter((items) => items.cartId !== action.payload)
    },

    clearCartList: (state) => {
      state.cartList = []
    },

    // Right side Cart open / close 
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen
    }
  },

})




export const { addToCartList, removeToCartList, incrementQty, decrementQty, clearCartList, toggleCart } = cartSlice.actions


export default cartSlice.reducer


