import { useDispatch } from "react-redux";

import { getOrderLocalStorage } from "helpers/functions/order";
import { setOrderItems } from "store/order/actionCreators";
import { T_OrderItem } from "store/order/types";

export const useOrderDispatch = () => {
    const dispatch = useDispatch()
    const { addOrders, editOrder, removeOrder } = getOrderLocalStorage()

    const add = (items: T_OrderItem[]) => {
        const list: T_OrderItem[] = JSON.parse(localStorage.getItem('order') as string)
        const existingOrder = list?.find(i => i.productId=== items[0].productId)
        
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
    const remove = (id: T_OrderItem['id']) => {
        const newList = removeOrder(id)
        dispatch(setOrderItems(newList))
    }
    const edit = (order: T_OrderItem) => {
        // let newList: T_OrderItem[] = (
        //     order.quantity ?
        //     editOrder(order) :
        //     removeOrder(order.productId)
        // )
        const newList = editOrder(order)
        dispatch(setOrderItems(newList))
    }

    return {
        add,
        edit,
        remove
    }
}