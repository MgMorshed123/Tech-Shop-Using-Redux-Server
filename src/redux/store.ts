
import {configureStore } from "@reduxjs/toolkit"
import CartReducer from "./feaured/Cart/CartSlice"


const store = configureStore ({
    reducer : {
        cart : CartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;


export type  AppDispatch = typeof store.dispatch;
export default store;




