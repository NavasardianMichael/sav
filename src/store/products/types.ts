import { T_Category } from "store/categories/types"
import { SET_PRODUCTS } from "./actionTypes"

export type T_ProductsState = {
    byId: {
        [key: T_Product['id']]: T_Product
    }
    allIds: T_Product['id'][]
}

export type T_Product = {
    id: string
    name: string
    price: number
    imageUrl: string
    categoryId: T_Category['id']
}

export type T_SetProducts = (products: T_ProductsState) => ({
    type: typeof SET_PRODUCTS
    payload: { products: typeof products }
})

export type T_ProductsActions = ReturnType<T_SetProducts>