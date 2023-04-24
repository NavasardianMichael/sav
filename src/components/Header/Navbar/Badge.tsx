import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectOrderList } from 'store/order/selectors'
import styles from './styles.module.scss'

export const Badge: FC = () => {

    const orderList = useSelector(selectOrderList)

    if(!orderList.length) return null;

    const productQuantity = orderList.reduce((acc, order) => {
        acc += order.quantity
        
        return acc
    }, 0) 

    return (
        <div className={styles.badge}>
            {productQuantity || 0}
        </div>
    )
}