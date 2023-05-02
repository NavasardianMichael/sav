import { MEASURE_UNIT_PLURALS } from "helpers/constants/products";
import { T_OrderItem } from "store/order/types";
import { T_Product } from "store/products/types";

type T_Func = {
    list: T_OrderItem[]
    addOrders: (v: T_OrderItem[]) => T_OrderItem[]
    editOrder: (v: T_OrderItem) => T_OrderItem[]
    removeOrder: (v: T_OrderItem) => T_OrderItem[]
}

export const getOrderLocalStorage = (key: string = 'order'): T_Func => {
    const valueStr = localStorage.getItem(key)
    
    if(valueStr == null) {
        return {
            list: [],
            addOrders: (v) => {
                localStorage.setItem(key, JSON.stringify(v))
                return v
            },
            editOrder: () => {
                console.warn(`no value found in localStorage applied to "${key}" key, eventually the order cannot be edited`)
                return []
            },
            removeOrder: () => {
                console.log(`no value found in localStorage applied to "${key}" key, eventually the order cannot be removed`)
                return []
            },
        }
    }
    
    return {
        list: JSON.parse(localStorage.getItem(key) as string),
        addOrders: (submittedOrders) => {
            const currentOrders: T_OrderItem[] = JSON.parse(localStorage.getItem(key) as string)
            const newOrders = [...currentOrders, ...submittedOrders]
            localStorage.setItem(key, JSON.stringify(newOrders))
            return newOrders
        },
        editOrder: (newOrder) => {
            const currentOrders: T_OrderItem[] = JSON.parse(localStorage.getItem(key) as string)
            const newOrders = currentOrders.map(currentOrder => {
                const orderExists = newOrder.id === currentOrder.id
                return orderExists ? newOrder : currentOrder
            })
            localStorage.setItem(key, JSON.stringify(newOrders))
            return newOrders
        },
        removeOrder: (order) => {
            const currentOrders: T_OrderItem[] = JSON.parse(localStorage.getItem(key) as string)
            const newOrders = currentOrders.filter(currentOrder => {
                return !(order.productId === currentOrder.productId && order.size === currentOrder.size)
            })
            localStorage.setItem(key, JSON.stringify(newOrders))
            return newOrders
        },
    }
}

export const getMeasureUnitCorrectedValue = (product: T_Product) => {
    if(product.quantityPerPack > 1) return MEASURE_UNIT_PLURALS[product.measureUnit as keyof typeof MEASURE_UNIT_PLURALS]
    return product.measureUnit
}