
import type { Status } from "../../globals/types/type";


interface IProduct{
    productId: string,
    productQty: number
}

export interface IOrderItems extends IProduct{
    orderId: string
}

export interface IOrder{
    status: Status,
    items: IOrderItems[],
    khaltiUrl:string | null
}


export enum PaymentMethod{
    khalti="khalti",
    esewa="esewa",
    COD="COD"

}
export interface IData{
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    city:string,
    zipCode:string,
    state:string,
    addressLine:string,
    totalAmount:number,
    PaymentMethod:PaymentMethod,
    products:IProduct[]
}