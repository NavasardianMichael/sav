import { T_Product } from "store/products/types"
import { SET_ORDER_ITEMS } from "./actionTypes"

export type T_OrderState = {
    list: T_OrderItem[]
}

export type T_OrderItem = {
    id: string
    productId: T_Product['id']
    quantity: number
}

export type T_SetOrderItems = (items: T_OrderItem[]) => ({
    type: typeof SET_ORDER_ITEMS
    payload: { items: typeof items }
})

export type T_OrderActions = ReturnType<T_SetOrderItems>