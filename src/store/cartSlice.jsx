import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalItems: 0 };

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItem(state, action) {
			state.totalItems += action.payload.amount;
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);
			if (!existingItem) {
				state.items.push({
					amount: newItem.amount,
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					tn: newItem.tn,
					totalPrice: newItem.price * newItem.amount,
				});
			} else {
				existingItem.amount += action.payload.amount;
				existingItem.totalPrice +=
					existingItem.amount * existingItem.price;
			}
		},

		removeItem(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalItems--;
			existingItem.totalPrice -= existingItem.price;
			if (existingItem.amount === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.amount--;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
