import { useMemo } from 'react'
import { useSelector } from "react-redux"

import { selectOrderList } from "store/order/selectors"

export const useOrderCount = () => {
    const orderList = useSelector(selectOrderList)

    const productQuantity = useMemo(() => {
        return orderList.reduce((acc, order) => {
            acc += order.quantity
            return acc
        }, 0)
    }, [orderList])

    return productQuantity
}