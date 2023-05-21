import { useDispatch } from "react-redux";

import { getOrderLocalStorage } from "helpers/functions/order";
import { setOrderItems } from "store/order/actionCreators";
import { T_OrderItem } from "store/order/types";

export const useOrderDispatch = () => {
    const dispatch = useDispatch()
    const { addOrders, editOrder, removeOrder } = getOrderLocalStorage()

    const add = (items: T_OrderItem[]) => {
        const list: T_OrderItem[] = JSON.parse(localStorage.getItem('order') as string)
        const existingOrder = list?.find(i => i.id === items[0].id)
        console.log({existingOrder});
        
        let newList: T_OrderItem[] = (
            existingOrder ?
            editOrder({
                ...existingOrder,
                quantity: existingOrder.quantity + items[0].quantity
            }) :
            addOrders(items)
        )
        
        dispatch(setOrderItems(newList))
    }

    const remove = (order: T_OrderItem) => {
        const newList = removeOrder(order)
        dispatch(setOrderItems(newList))
    }
    const edit = (order: T_OrderItem) => {
        const newList = editOrder(order)
        dispatch(setOrderItems(newList))
    }

    return {
        add,
        edit,
        remove
    }
}