import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC, useState } from 'react';

import { useOrderDispatch } from 'hooks/useOrderDispatch';
import { T_Product } from 'store/products/types';

import styles from '../styles.module.scss';
import { T_OrderItem } from 'store/order/types';

type T_Props = Pick<T_Product, 'id'> & Pick<T_OrderItem, 'size'>

export const QuantityBlock: FC<T_Props> = ({ id, size }) => {

    const { add } = useOrderDispatch()
    const [count, setCount] = useState('1')

    const handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        const { name } = e.currentTarget
        if(name === 'decrement') {
            if(+count <= 1) return;
            return setCount(prev => (+prev - 1).toString())
        }
        setCount(prev => (+prev + 1).toString())
    }

    const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget
        setCount(value)
    }

    const handleCountApply: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const { name } = e.currentTarget
        add([{
            id: `${name}-${size}`,
            productId: name,
            size,
            quantity: +count
        }])
    }

    const handleCountInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if(!e.currentTarget.value || +e.currentTarget.value < 0) setCount('1')   
    }

    return (
        <>
            <p>Количество</p>    
            <div className={styles.quantityBlock}>
                <div className={styles.manipulations}>
                    <button name='decrement' onClick={handleCountUnitChange}>
                        <RemoveIcon />
                    </button>
                    <input type='number' value={count} onChange={handleCountChange} onBlur={handleCountInputBlur} />
                    <button name='increment' onClick={handleCountUnitChange}>
                        <AddIcon />
                    </button>
                </div>
                <div className={styles.application}>
                    <button name={id} onClick={handleCountApply}>Добавить В корзину</button>
                </div>
            </div>
        </>
    )
}