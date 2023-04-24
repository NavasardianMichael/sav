import { getOrderLocalStorage } from "helpers/functions/order";
import { useDispatch } from "react-redux";
import { setOrderItems } from "store/order/actionCreators";
import { T_OrderItem } from "store/order/types";

export const useOrderDispatch = () => {
    const dispatch = useDispatch()
    const { addOrder } = getOrderLocalStorage()
    return (items: T_OrderItem[]) => {
        console.log({items});
        
        dispatch(setOrderItems(items))
        addOrder(items)
    }
}