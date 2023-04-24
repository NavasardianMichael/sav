
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from 'store/products/selectors';
import { T_SubCategory } from 'store/subCategories/types';
import { Product } from './Product';

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
                        <Product 
                            key={productId} 
                            product={product} 
                        />
                    )
                })
            }
        </div>
    )
}