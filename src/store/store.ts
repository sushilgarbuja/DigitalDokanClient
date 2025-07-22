import { configureStore } from "@reduxjs/toolkit"


import authSlice from "./authSlice"

import productSlice from "./productSlice"

import cartSlice from "./cartSlice"

import orderSlice from "./checkoutSlice"

import adminCategorySlice from "./adminCategorySlice"

const store = configureStore({
    reducer:{
        auth:authSlice,
        products:productSlice,
        cart:cartSlice,
        order:orderSlice,
        categories:adminCategorySlice

    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
