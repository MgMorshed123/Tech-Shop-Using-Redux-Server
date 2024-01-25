
import {configureStore } from "@reduxjs/toolkit"
import CartReducer from "./feaured/Cart/CartSlice"
import ProductReducer from './feaured/Products/productsSlice'





const store = configureStore ({
    reducer : {
        cart : CartReducer,
        product : ProductReducer
    },
})



export type RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;
export default store;




