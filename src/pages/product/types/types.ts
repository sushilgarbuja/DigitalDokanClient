import type { Status } from "../../../globals/types/type"

/*
 "id": "400fb6c2-4eb7-4836-a6fc-ba681ae303d5",
            "productName": "Huawai",
            "productDescription": "Huawai is best selling phone.",
            "productPrice": 200,
            "productTotalStock": 100,
            "discount": 0,
            "productImage": "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
            "createdAt": "2025-06-14T16:03:21.528Z",
            "updatedAt": "2025-06-14T16:03:21.528Z",
            "categoryId": "17c1cc74-a094-4df6-b1f4-7300897aa382",
            "Category": {
                "id": "17c1cc74-a094-4df6-b1f4-7300897aa382",
                "categoryName": "Mobile"
            }
*/
interface ICategory{
    id: string
    categoryName: string
}
export interface IProduct{
    id: string
    productName: string
    productDescription: string
    productPrice: number
    productTotalStock: number
    discount: number
    productImage: string
    createdAt: string
    updatedAt: string
    categoryId: string
    Category: ICategory
}

export interface IProducts{
    products:IProduct[]
    product:IProduct | null
    status: Status
}