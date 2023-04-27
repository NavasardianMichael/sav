import { getOrderLocalStorage } from "helpers/functions/order";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "store/products/selectors";
import styles from './styles.module.scss';

export const OrderList: FC = () => {

    const products = useSelector(selectProducts)
    const { list } = getOrderLocalStorage()

    if(!products?.allIds?.length) return null

    return (
        <div className={styles.orderList}>
            {
                list.map(order => {
                    console.log(products.byId, order.productId)
                    const { name } = products.byId[order.productId]
                    return (
                        <div className={styles.order}>
                            {name}
                        </div>
                    )
                })
            }
        </div>
    )
}