import axios from "axios";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import type { AppDispatch } from "./store";


interface ILoginUser{
    email:string,
    password:string
}
interface IUser{
    username:string| null
    email:string | null
    password:string | null
    token:string | null
}
interface IAuthState{
    user:IUser,
    status:Status
}

const initialState:IAuthState={
    user:{
        username:null,
        email:null,
        password:null,
        token:null
    },
    status: Status.LOADING
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser(state:IAuthState,action:PayloadAction<IUser>){
            state.user=action.payload
        },
        setStatus(state:IAuthState,action:PayloadAction<Status>){
            state.status=action.payload
        },
        setToken(state:IAuthState,action:PayloadAction<string>){
            state.user.token=action.payload
        }
    }
})

export const {setUser,setStatus,setToken}=authSlice.actions
export default authSlice.reducer

export function registerUser(data:IUser){
    return async function registerUserThunk(dispatch:AppDispatch){
        try {
            const response=await axios.post("http://localhost:4000/register",data)
            if(response.status===201){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
                dispatch(response.data)
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))

        }}
}

export function loginUser(data:ILoginUser){
    return async function loginUserThunk(dispatch:AppDispatch){
        try {
            const response=await axios.post("http://localhost:4000/login",data)
            if(response.status===200){
                dispatch(setStatus(Status.SUCCESS))
                if(response.data.token){
              localStorage.setItem("tokenhoYo",response.data.token)
                    dispatch(setToken(response.data.token))
                }else{
                    dispatch(setStatus(Status.ERROR))
                }

            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }}
}

export function forgotPassword(data:{email:string}){
    return async function forgotPasswordThunk(dispatch:AppDispatch){
        try {
            const response=await axios.post("http://localhost:4000/forgot-password",data)
            if(response.status===201){
                dispatch(setStatus(Status.SUCCESS))

            }else{
                dispatch(setStatus(Status.ERROR))
            }
            return response.data
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }}
}

