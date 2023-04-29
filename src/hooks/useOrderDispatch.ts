import { useDispatch } from "react-redux";

import { getOrderLocalStorage } from "helpers/functions/order";
import { setOrderItems } from "store/order/actionCreators";
import { T_OrderItem } from "store/order/types";

export const useOrderDispatch = () => {
    const dispatch = useDispatch()
    const { addOrders, editOrder, removeOrder } = getOrderLocalStorage()
    return {
        add: (items: T_OrderItem[]) => {
            const newList = addOrders(items)
            dispatch(setOrderItems(newList))
        },
        edit: (order: T_OrderItem) => {
            const newList = editOrder(order)
            dispatch(setOrderItems(newList))
        },
        remove: (id: T_OrderItem['id']) => {
            const newList = removeOrder(id)
            dispatch(setOrderItems(newList))
        },
    }
}