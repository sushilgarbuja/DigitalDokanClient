import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../globals/types/type"

import type { AppDispatch, RootState } from "./store"
import { API, APIWITHTOKEN } from "../http"
import type { IProduct } from "../pages/admin/products/components/ProductModal"




export interface IProductAdmin {
    id : string
    productName: string,
    productPrice: number,
    productTotalStock: number,
    discount: number,
    productDescription: string,
    productImage: string,
    createdAt: string,
    updatedAt: string,
    Category:{
        categoryName: string
    }
}


interface IInitialState {
    products: IProductAdmin[]
    status: Status
    product:null | IProductAdmin
}

const initialState: IInitialState = {
    products: [],
    status: Status.LOADING,
    product:null
}

const productSlice = createSlice({
    name:"adminProducts",
    initialState,
    reducers:{
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status=action.payload
        },
        setProducts(state:IInitialState,action:PayloadAction<IProductAdmin[]>){
            state.products=action.payload
            console.log(action.payload)
        },
        //delete products
        deleteProduct(state:IInitialState,action:PayloadAction<string>){
            const index=state.products.findIndex((product)=>product.id===action.payload)
            if(index!==-1){
                state.products.splice(index,1)
            }
        },
        //addProduct
        addProductToProducts(state:IInitialState,action:PayloadAction<IProductAdmin>){
            state.products.push(action.payload)
        },
        setProduct(state:IInitialState,action:PayloadAction<IProductAdmin>){
                    state.product=action.payload
                },

    }
})

export const {setProducts,setStatus,deleteProduct,addProductToProducts,setProduct}=productSlice.actions
export default productSlice.reducer


//fetch products
export function AdminfetchProducts(){
    return async function fetchProductsThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.get("/product")
            if(response.status===200){
                // dispatch(setStatus(Status.SUCCESS))
                dispatch(setProducts(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

//delete product
export function handleProductDelete(id:string){
    return async function handleProductDeleteThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.delete(`/product/${id}`)
            if(response.status===200){
                dispatch(deleteProduct(id))
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function addProduct(data:IProduct){
    return async function addProductThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.post("/product",data,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(addProductToProducts(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function fetchProductAdmin(id:string){
    return async function fetchProductAdminThunk(dispatch:AppDispatch,getState:()=>RootState){
        const store = getState()
        const productExists = store.products.products.find((product:IProductAdmin)=>product.id === id) 
     
        if(productExists){
            dispatch(setProduct(productExists))
            dispatch(setStatus(Status.SUCCESS))
        }else{
            try {
                const response = await API.get('/product/' + id)
                if(response.status === 200){
                    dispatch(setStatus(Status.SUCCESS))
                    dispatch(setProduct( response.data.data.length>0 && response.data.data[0]))
                }else{
                    dispatch(setStatus(Status.ERROR))
                }
            } catch (error) {
                console.log(error)
                dispatch(setStatus(Status.ERROR))
            }
        }
    }
}