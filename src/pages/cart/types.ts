import { Status } from './../../globals/types/type';




export interface ICartProduct{
    id:string,
    productName:string,
    // productDescription:string,
    productPrice:number,
    // productTotalStock:number,
    // discount:number,
    productImage:string

}


export interface ICartItem{
    id:string,
    quantity:number,
    productId:string,
    Product:ICartProduct
}

export interface ICartInitialState{
    items:ICartItem[],
    status:Status,
    total:number
}

export interface ICartUpdateItem{
    productId:string,
    quantity:number
}