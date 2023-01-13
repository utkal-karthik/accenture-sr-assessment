import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const index = createSlice({
	name: 'cart',
	initialState: {
		cartItems: [],
		loading: true,
		error:false,
	},
    reducers: {
		addToCart: (state,action) => {
            var foundIndex = state.cartItems.findIndex(x => x.id == action.payload.item.id);
            if(foundIndex >= 0) {
                state.cartItems[foundIndex]['quantity'] = state.cartItems[foundIndex]['quantity'] + 1;
            }else {
                state.cartItems.push({...action.payload.item, quantity:1})
            }
		},
        addIncrement: (state,action) => {
            var foundIndex = state.cartItems.findIndex(x => x.id == action.payload.item.id);
            if(foundIndex >= 0) {
                state.cartItems[foundIndex]['quantity'] = state.cartItems[foundIndex]['quantity'] + 1;
            }else {
                state.cartItems.push({...action.payload.item, quantity:1})
            }
		},
        decrement: (state,action) => {
            var foundIndex = state.cartItems.findIndex(x => x.id == action.payload.item.id);
            if(foundIndex >= 0) {
                state.cartItems[foundIndex]['quantity'] = state.cartItems[foundIndex]['quantity'] - 1;
            }else {
                state.cartItems.push({...action.payload.item, quantity:1})
            }
		},
        removeObject: (state,action) => {
            var foundIndex = state.cartItems.findIndex(x => x.id == action.payload.id);
            state.cartItems.splice(foundIndex,1)
		},
	},
	extraReducers: {},
	
});

export const { addToCart, decrement, addIncrement, removeObject } = index.actions;
export default index.reducer;