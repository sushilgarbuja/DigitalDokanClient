
import { PaymentStatus } from './../../../server/src/globals/types/index';
import {createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../globals/types/type"

import type { AppDispatch } from "./store"
import { APIWITHTOKEN} from "../http"
import type { IOrderDetail, PaymentMethod } from "../pages/my-orders-details/types"



export interface IAdminOrder{
    id:string,
    productQty:number,
    orderStatus:string,
    totalAmount:number,
    Payment?:{
        paymentMethod:PaymentMethod,
        paymentStatus:PaymentStatus,
    }

}


interface IInitialState{
    items:IAdminOrder[],
    status:Status,
    orderDetails:IOrderDetail[]
}

const initialState:IInitialState={
    status:Status.LOADING,
    items : [],
    orderDetails:[]
}

const orderSlice=createSlice({
    name:"adminOrders",
    initialState,
    reducers:{
        setItems(state:IInitialState,action:PayloadAction<IAdminOrder[]>){
            state.items=action.payload
        },
          setOrderDetails(state:IInitialState,action:PayloadAction<IOrderDetail[]>){
            state.orderDetails=action.payload
        },
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status=action.payload
        },
        
    //     updateOrderStatusToCancel(state:IOrder,action:PayloadAction<{orderId:string}>) {
    //         const orderId=action.payload.orderId
    //         // state.items.map((setItems.)) 
    //     //    const data=state.orderDetails.map((order)=>order.orderId==orderId?{...order,[order.order.orderStatus]:OrderStatus.Cancelled}:order)  
    //     //     state.orderDetails=data 
    //     const datas=state.orderDetails.find((order)=>order.orderId===orderId)
    //     if(datas){
    //         datas.order.orderStatus=OrderStatus.Cancelled
    //     }

    // }
}
})

export default orderSlice.reducer

const {setItems,setStatus,setOrderDetails}= orderSlice.actions




//fetch user order items
export function fetchOrders(){
    return async function fetchOrdersThunk(dispatch:AppDispatch){
        try {
            const response=await APIWITHTOKEN.get("/order/all")
            console.log(response.data)
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

// //fetch my order details
export function fetchMAdminOrderDetails(id:string){
    return async function fetchAdminOrderDetailsThunk(dispatch:AppDispatch){
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
// //cancel order
// export function cancelOrderAPI(id:string){
//     return async function cancelOrderAPIThunk(dispatch:AppDispatch){
//         try {
//             const response=await APIWITHTOKEN.patch("/order/cancel-order/"+id)
//             if(response.status===200){
//                 dispatch(setStatus(Status.SUCCESS))
//                 dispatch(updateOrderStatusToCancel({orderId:id}))
//             }else{
//                 dispatch(setStatus(Status.ERROR))
//             }
//             return response.data
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(Status.ERROR))
//         }}
// }
