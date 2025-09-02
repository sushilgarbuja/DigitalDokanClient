

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../globals/types/type"
import type { AppDispatch } from "./store"
import {APIWITHTOKEN } from "../http"


interface ICategory{
    id:string,
    categoryName:string,
    createdAt:string,
}

interface ICategoryInitialState {
    items:{
        id:string,
        categoryName:string,
        createdAt:string
    }[],
    status:Status,
    
}

const initialState: ICategoryInitialState = {
    items: [],
    status: Status.LOADING,
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setItems(state: ICategoryInitialState, action: PayloadAction<ICategory[]>) {
            state.items = action.payload
        },
        setStatus(state: ICategoryInitialState, action: PayloadAction<Status>) {
            state.status = action.payload
        },
        addCategoryToItems(state: ICategoryInitialState, action: PayloadAction<ICategory>) {
            state.items.push(action.payload)
        },
        setDeleteCategoryItem(state: ICategoryInitialState, action: PayloadAction<string>) {
            const index = state.items.findIndex((item => item.id == action.payload))
            if (index !== -1) {
                state.items.splice(index, 1)
            }
        },
        resetStatus(state: ICategoryInitialState) {
            state.status = Status.LOADING
        }
    }
})

const { setItems, setStatus,setDeleteCategoryItem,addCategoryToItems,resetStatus} = categorySlice.actions
export { setItems, setStatus, setDeleteCategoryItem,addCategoryToItems,resetStatus }
export default categorySlice.reducer

export function addCategory(categoryName: string) {
  return async function addCategoryThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/category", { categoryName });
      if (response.status === 201) {
       dispatch(addCategoryToItems(response.data.data));
        dispatch(setStatus(Status.SUCCESS));
        return response.data.data;
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchCategoryItems() {
    return async function fetchCategoryItemsThunk(dispatch: AppDispatch) {
        try {
            const response = await APIWITHTOKEN.get("/category")
            if (response.status === 200) {
                dispatch(setItems(response.data.data))
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}



// Delete Category item
export function handleCategoryItemDelete(CategoryId: string) {
    return async function handleCategoryItemDeleteThunk(dispatch: AppDispatch) {
        try {
            const response = await APIWITHTOKEN.delete(`/category/${CategoryId}`)
            if (response.status === 200) {
                dispatch(setDeleteCategoryItem(CategoryId))
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}