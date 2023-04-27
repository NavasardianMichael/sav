import { T_OrderItem } from "store/order/types";

type T_Func = {
    list: T_OrderItem[]
    addOrder: (v: T_OrderItem[]) => void
    removeOrder: (v: T_OrderItem) => void
}

export const getOrderLocalStorage = (key: string = 'order'): T_Func => {
    const valueStr = localStorage.getItem(key)
    
    if(valueStr == null) {
        return {
            list: [],
            addOrder: (v: any) => localStorage.setItem(key, JSON.stringify(v)),
            removeOrder: () => console.log(`no value found in localStorage applied to "${key}" key, eventually the order cannot be removed`),
        }
    }
    
    const orderList = JSON.parse(valueStr)
    
    return {
        list: orderList,
        addOrder: (v: T_OrderItem[]) => {
            localStorage.setItem(key, JSON.stringify([...JSON.parse(localStorage.getItem(key) as string), ...v]))
        },
        removeOrder: (v: T_OrderItem) => {
            localStorage.setItem(key, JSON.stringify(JSON.parse(localStorage.getItem(key) as string).filter((l: any) => l.id !== v.id)))
        },
    }
}