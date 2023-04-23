import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from 'store/products/selectors';
import { T_SubCategory } from 'store/subCategories/types';

import styles from './styles.module.scss';

type T_Props = {
    ids: T_SubCategory['productIds']
}

export const Products: FC<T_Props> = ({ ids }) => {

    const products = useSelector(selectProducts)
    const [count, setCount] = useState(1)

    if(!products.allIds.length) return null;

    const handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const { name } = e.currentTarget
        if(name === 'decrement') return setCount(prev => +prev - 1)
        setCount(prev => +prev + 1)
    }

    const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget
        setCount(+value)
    }

    return (
        <div className={styles.products}>
            {
                ids.map(productId => {
                    const product = products.byId[productId]
                    return (
                        <div id={productId} key={productId} className={styles.product}>
                            <div className={styles.imgBlock}>
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                            <div className={styles.detailsBlock}>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </div>
                            <div className={styles.optionsBlock}>
                                <div className={styles.quantityBlock}>
                                    <button name='decrement' onClick={handleCountUnitChange}>
                                        <RemoveIcon />
                                    </button>
                                    <input type='number' value={count} onChange={handleCountChange} />
                                    <button name='increment' onClick={handleCountUnitChange}>
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}