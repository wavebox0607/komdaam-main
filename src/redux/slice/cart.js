import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    cartOpen: false,
    total: 0
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

    // Remove single product from cart List 
    removeToCartList: (state, action) => {
      state.cartList = state.cartList.filter((items) => items.cartId !== action.payload)
    },

    // delete all product in cart List 
    clearCartList: (state) => {
      state.cartList = []
    },
    getTotal: (state) => {
      const priceList = state.cartList?.map(p => p.qty * p.price)
      state.total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
    },

    // Right side Cart open / close 
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen
    }
  },

})


export const { addToCartList, removeToCartList, incrementQty, decrementQty, clearCartList, toggleCart } = cartSlice.actions


export default cartSlice.reducer


