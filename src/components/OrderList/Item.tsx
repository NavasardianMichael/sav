import { FC } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { T_OrderItem } from 'store/order/types';
import { T_Product } from 'store/products/types';
import styles from './styles.module.scss';
import sharedStyles from 'assets/styles/_shared.module.scss';

type T_Props = {
    product: T_Product
    order: T_OrderItem
    handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement>
    handleCountChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Item: FC<T_Props> = ({ order, product, handleCountChange, handleCountUnitChange }) => {

    return (
        <div className={styles.order}>
            <div className={styles.removeOrderCol}>
                <button>
                    &#10006;
                </button>
            </div>
            <div className={styles.imgCol}>
                <img src={product.imageUrl} />
            </div>
            <div className={styles.nameCol}>
                <h4 className={sharedStyles['h-sm']}>{product.name}</h4>
            </div>
            <div className={styles.countCol}>
                <button data-orderid={order.id} name='decrement' onClick={handleCountUnitChange}>
                    <RemoveIcon />
                </button>
                <input type='number' data-orderid={order.id} value={order.quantity} onChange={handleCountChange} />
                <button data-orderid={order.id} name='increment' onClick={handleCountUnitChange}>
                    <AddIcon />
                </button>
            </div>
        </div>
    )
}