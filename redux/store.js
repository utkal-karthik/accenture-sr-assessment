import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./products/index";
import cartReducer from "./cart/index";

export default configureStore({
	reducer: {
        products:productsReducer,
        cart:cartReducer
	},
})


