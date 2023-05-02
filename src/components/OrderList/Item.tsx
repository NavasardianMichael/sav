import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC } from "react";
import { T_OrderItem } from 'store/order/types';
import { T_Product } from 'store/products/types';
import styles from './styles.module.scss';
import { getMeasureUnitCorrectedValue } from 'helpers/functions/order';

type T_Props = {
    product: T_Product
    order: T_OrderItem
    handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement>
    handleCountChange: React.ChangeEventHandler<HTMLInputElement>
    handleRemoveButtonClick: React.MouseEventHandler<HTMLButtonElement>
    handleCountInputBlur: React.FocusEventHandler<HTMLInputElement>
}

export const Item: FC<T_Props> = ({ order, product, handleCountChange, handleCountInputBlur, handleCountUnitChange, handleRemoveButtonClick }) => {
    return (
        <div className={styles.order}>
            <div className={styles.removeOrderCol}>
                <button data-orderid={order.productId} onClick={handleRemoveButtonClick}>
                    &#10006;
                </button>
            </div>
            <div className={styles.imgCol}>
                <img src={product.imageUrl} />
            </div>
            <div className={styles.detailsCol}>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.characteristics}>
                    <div>
                        <div><b>Страна производства: </b> </div>
                        <div><b>Количество в упаковке: </b></div>
                        {!!order.size && <div><b>Размер: </b></div>}
                    </div>
                    <div>
                        <div>{product.originCountry}</div>
                        <div>{product.quantityPerPack} {getMeasureUnitCorrectedValue(product)}</div>
                        {!!order.size && <div>{order.size}</div>}
                    </div>
                </div>
            </div>
            <div className={styles.countCol}>
                <button data-orderid={order.id} name='decrement' onClick={handleCountUnitChange}>
                    <RemoveIcon />
                </button>
                <input 
                    type='number' 
                    data-orderid={order.id} 
                    value={order.quantity || ''} 
                    onChange={handleCountChange} 
                    onBlur={handleCountInputBlur}
                />
                <button data-orderid={order.id} name='increment' onClick={handleCountUnitChange}>
                    <AddIcon />
                </button>
            </div>
        </div>
    )
}