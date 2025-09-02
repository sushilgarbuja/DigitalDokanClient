import axios from "axios";  

const API = axios.create({
    baseURL:"http://localhost:4000/api",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
})

const APIWITHTOKEN=axios.create({
    baseURL:"http://localhost:4000/api",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":localStorage.getItem("tokenhoYo")
    }
})
const APIWITHTOKEN2=axios.create({
    baseURL:"http://localhost:4000/",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":localStorage.getItem("tokenhoYo")
    }
})



export {API,APIWITHTOKEN,APIWITHTOKEN2}