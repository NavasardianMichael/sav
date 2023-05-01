import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC, useState } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { combineClassNames } from 'helpers/functions/commons';
import { useOrderDispatch } from 'hooks/useOrderDispatch';
import { T_Product } from "store/products/types";

import styles from './styles.module.scss';

type T_Props = {
    product: T_Product
}

export const Product: FC<T_Props> = ({ product: { id, name, description, imageUrl, sizes } }) => {

    const { add } = useOrderDispatch()
    const [count, setCount] = useState('1')
    const [selectedSize, setSelectedSize] = useState(sizes[0])

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
            id: Date.now().toString(),
            productId: name,
            quantity: +count
        }])
    }

    const handleCountInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if(!e.currentTarget.value || +e.currentTarget.value < 0) setCount('1')   
    }

    const handleSizeChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        const { name } = e.currentTarget
        setSelectedSize(name)
    }
console.log({sizes, selectedSize})
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
                <p>Размер</p>
                <div className={styles.sizesBlock}>
                    {
                        sizes.map(size => {
                            return (
                                <button 
                                    key={size} 
                                    name={size}
                                    className={combineClassNames(styles.sizeBtn, selectedSize === size ? styles.selected : undefined)}
                                    onClick={handleSizeChange}
                                >
                                    {size}
                                </button>
                            )
                        })
                    }
                </div>
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
            </div>
        </div>
    )
}