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
    imageUrl: string
    categoryId: T_Category['id']
    description: string
    sizes: string[]
    quantityPerPack: number
    originCountry: string
    measureUnit: string
}

export type T_SetProducts = (products: T_ProductsState) => ({
    type: typeof SET_PRODUCTS
    payload: { products: typeof products }
})

export type T_ProductsActions = ReturnType<T_SetProducts>