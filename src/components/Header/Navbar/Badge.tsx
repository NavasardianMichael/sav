import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectOrderList } from 'store/order/selectors'
import styles from './styles.module.scss'

export const Badge: FC = () => {

    const orderList = useSelector(selectOrderList)

    if(!orderList.length) return null;

    return (
        <div className={styles.badge}>
            {orderList.length}
        </div>
    )
}