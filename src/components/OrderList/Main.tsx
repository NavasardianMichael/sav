import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC } from "react";
import { useSelector } from "react-redux";

import sharedStyles from 'assets/styles/_shared.module.scss';
import { getOrderLocalStorage } from "helpers/functions/order";
import { useOrderCount } from "hooks/useOrderCount";
import { selectProducts } from "store/products/selectors";

import styles from './styles.module.scss';

export const OrderList: FC = () => {

    const products = useSelector(selectProducts)
    const { list } = getOrderLocalStorage()
    const count = useOrderCount()

    if(!products?.allIds?.length) return null

    const handleCountUnitChange = () => {
        
    }

    const handleCountChange = () => {

    }

    return (
        <div className={styles.ordersBlock}>
            <h2 className={sharedStyles['h-lg']}>Корзина ({count})</h2>
            <div className={styles.ordersList}>
                {
                    list.map(order => {
                        const { id, name, imageUrl } = products.byId[order.productId]
                        return (
                            <div key={id} className={styles.order}>
                                <div className={styles.removeOrderCol}>
                                    <button>
                                        &#10006;
                                    </button>
                                </div>
                                <div className={styles.imgCol}>
                                    <img src={imageUrl} />
                                </div>
                                <div className={styles.nameCol}>
                                    <h4 className={sharedStyles['h-sm']}>{name}</h4>
                                </div>
                                <div className={styles.countCol}>
                                    <button name='decrement' onClick={handleCountUnitChange}>
                                        <RemoveIcon />
                                    </button>
                                    <input type='number' value={order.quantity} onChange={handleCountChange} />
                                    <button name='increment' onClick={handleCountUnitChange}>
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}