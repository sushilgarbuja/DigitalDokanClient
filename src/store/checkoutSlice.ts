import {createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../globals/types/type"
import type { IData, IOrder, IOrderItems } from "../pages/checkout/types"
import type { AppDispatch } from "./store"
import { APIWITHTOKEN } from "../http"
import type { IOrderDetail } from "../pages/my-orders-details/types"



const initialState:IOrder={
    status:Status.LOADING,
    items : [],
    khaltiUrl:null,
    orderDetails:[]
}

const orderSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{
        setItems(state:IOrder,action:PayloadAction<IOrderItems[]>){
            state.items=action.payload
        },
          setOrderDetails(state:IOrder,action:PayloadAction<IOrderDetail[]>){
            state.orderDetails=action.payload
        },
        setStatus(state:IOrder,action:PayloadAction<Status>){
            state.status=action.payload
        },
        setKhaltiUrl(state:IOrder,action:PayloadAction<string>){
            state.khaltiUrl=action.payload
        },

    }
})

export default orderSlice.reducer

const {setItems,setStatus,setKhaltiUrl,setOrderDetails}= orderSlice.actions

export function OrderItem(data: IData) {
  return async function orderItemThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/order", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setItems(response.data.data));

        if (response.data.paymentUrl) {
          dispatch(setKhaltiUrl(response.data.paymentUrl)); // ✅ fix here
          window.location.href = response.data.paymentUrl;
        }
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}


//fetch user order items
export function fetchOrderItems(){
    return async function fetchOrderItemsThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.get("/order")
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setItems(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }}
}

//fetch my order details
export function fetchMyOrderDetails(id:string){
    return async function fetchMyOrderDetailsThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.get("/order/"+id)
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setOrderDetails(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }}
}
