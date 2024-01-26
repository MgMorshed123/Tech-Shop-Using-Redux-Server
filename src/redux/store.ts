
import {configureStore } from "@reduxjs/toolkit"
import CartReducer from "./feaured/Cart/CartSlice"
import ProductReducer from './feaured/Products/productsSlice'
import {api}   from './api/apiSlice';




const store = configureStore ({
    reducer : {
        cart : CartReducer,
        product : ProductReducer,
        [api.reducerPath] : api.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;
export default store;




