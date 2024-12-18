import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "ui",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToart(state, action) {
      const newItem = action.payload;
      // if it os an item of cart , add quantity to it instead of pushng additional item
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.item.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
