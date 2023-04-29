import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC, useState } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { useOrderDispatch } from 'hooks/useOrderDispatch';
import { T_Product } from "store/products/types";

import styles from './styles.module.scss';

type T_Props = {
    product: T_Product
}


export const Product: FC<T_Props> = ({ product: { id, name, description, imageUrl } }) => {

    const { add } = useOrderDispatch()
    const [count, setCount] = useState('1')

    const handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const { name } = e.currentTarget
        if(name === 'decrement') return setCount(prev => (+prev - 1).toString())
        setCount(prev => (+prev + 1).toString())
    }

    const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget
        setCount(value)
    }

    const handleCountApply: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const { name } = e.currentTarget
        add([{
            id: Date.now().toString(),
            productId: name,
            quantity: +count
        }])
    }

    return (
        <div id={id} className={styles.product}>
            <div className={styles.imgBlock}>
                <img src={imageUrl} alt={name} />
            </div>
            <div className={styles.detailsBlock}>
                <h4 className={sharedStyles['mt-0']}>{name}</h4>
                <p>{description}</p>
            </div>
            <div className={styles.optionsBlock}>
                <div className={styles.quantityBlock}>
                    <div className={styles.manipulations}>
                        <button name='decrement' onClick={handleCountUnitChange}>
                            <RemoveIcon />
                        </button>
                        <input type='number' value={count} onChange={handleCountChange} />
                        <button name='increment' onClick={handleCountUnitChange}>
                            <AddIcon />
                        </button>
                    </div>
                    <div className={styles.application}>
                        <button name={id} onClick={handleCountApply}>Добавить В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}