import { useDispatch } from "react-redux";

import { getOrderLocalStorage } from "helpers/functions/order";
import { setOrderItems } from "store/order/actionCreators";
import { T_OrderItem } from "store/order/types";

export const useOrderDispatch = () => {
    const dispatch = useDispatch()
    const { list, addOrders, editOrder, removeOrder } = getOrderLocalStorage()

    const add = (items: T_OrderItem[]) => {
        const existingOrder = list.find(i => i.productId=== items[0].productId)
        console.log({list, items, existingOrder});
        
        let newList: T_OrderItem[] = (
            existingOrder ?
            editOrder({
                ...items[0],
                quantity: existingOrder.quantity + items[0].quantity
            }) :
            addOrders(items)
        )
        console.log({newList});
        
        dispatch(setOrderItems(newList))
    }
    const remove = (id: T_OrderItem['id']) => {
        const newList = removeOrder(id)
        dispatch(setOrderItems(newList))
    }
    const edit = (order: T_OrderItem) => {
        let newList: T_OrderItem[] = (
            order.quantity ?
            editOrder(order) :
            removeOrder(order.productId)
        )
        dispatch(setOrderItems(newList))
    }

    return {
        add,
        edit,
        remove
    }
}