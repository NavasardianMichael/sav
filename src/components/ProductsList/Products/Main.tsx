import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from 'store/products/selectors';
import { T_SubCategory } from 'store/subCategories/types';

import styles from './styles.module.scss';

type T_Props = {
    ids: T_SubCategory['productIds']
}

export const Products: FC<T_Props> = ({ ids }) => {

    const products = useSelector(selectProducts)

    if(!products.allIds.length) return null;

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
                                <input type='number' value={11} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}