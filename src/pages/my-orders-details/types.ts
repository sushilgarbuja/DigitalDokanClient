
export enum OrderStatus{
    Preparation="preparation",
    Ontheway="ontheway",
    Pending="pending",
    Shipping="shipping",
    Delivered="delivered",
    Cancelled="cancelled"
}
export enum PaymentMethod{
    khalti="khalti",
    esewa="esewa",
    COD="COD"
}

export enum PaymentStatus{
    paid="paid",
    unpaid="unpaid"
}

export interface IOrderDetail{
    id:string,
    quantity:number,
    createdAt:string,
    orderId:string,
    productId:string,
    Order:{
        OrderStatus:OrderStatus,
        AddressLine:string,
        City:string,
        State:string,
        totalAmount:number,
        phoneNumber:string,
        Payment:{
            paymentMethod:PaymentMethod,
            paymentStatus:PaymentStatus
        }
        
    },
    Product:{
        productImageUrl:string,
        productName:string,
        productPrice:number,
        Category:{
            categoryName:string,
        }
    }
}