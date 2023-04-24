import { T_OrderItem } from "store/order/types";

export const getOrderLocalStorage = (key: string = 'order') => {
    const valueStr = localStorage.getItem(key)
    console.log({valueStr});
    
    if(valueStr == null) {
        return {
            value: null,
            addOrder: (v: any) => localStorage.setItem(key, JSON.stringify(v)),
            removeOrder: () => console.log(`no value found in localStorage applied to "${key}" key, eventually the order cannot be removed`),
        }
    }
    
    const orderList = JSON.parse(valueStr)
    
    return {
        value: orderList,
        addOrder: (v: T_OrderItem[]) => {
            localStorage.setItem(key, JSON.stringify([...JSON.parse(localStorage.getItem(key) as string), ...v]))
        },
        removeOrder: (v: T_OrderItem) => {
            localStorage.setItem(key, JSON.stringify(JSON.parse(localStorage.getItem(key) as string).filter((l: any) => l.id !== v.id)))
        },
    }
}