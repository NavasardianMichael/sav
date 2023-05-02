import { FC, useState } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { combineClassNames } from 'helpers/functions/commons';
import { T_Product } from "store/products/types";

import styles from '../styles.module.scss';
import { QuantityBlock } from './QuantityBlock';
import { getMeasureUnitCorrectedValue } from 'helpers/functions/order';

type T_Props = {
    product: T_Product
}

export const Product: FC<T_Props> = ({ product }) => {

    const {
        id, 
        name, 
        description, 
        imageUrl, 
        sizes,
        originCountry,
        quantityPerPack
    } = product
    const [selectedSize, setSelectedSize] = useState(sizes[0])

    const handleSizeChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        const { name } = e.currentTarget
        setSelectedSize(name)
    }

    return (
        <div id={id} className={styles.product}>
            <div className={styles.imgBlock}>
                <img src={imageUrl} alt={name} />
            </div>
            <div className={styles.detailsBlock}>
                <h3 className={sharedStyles['mt-0']}>{name}</h3>
                <p><b>Описание:</b> {description}</p>
                <div className={styles.characteristics}>
                    <div className={styles.charNames}>
                        <div><b>Страна производства:</b> </div>
                        <div><b>Количество в упаковке:</b></div>
                    </div>
                    <div className={styles.charValues}>
                        <div>{originCountry}</div>
                        <div>{quantityPerPack} {getMeasureUnitCorrectedValue(product)}</div>
                    </div>
                </div>
            </div>
            <div className={styles.optionsBlock}>
                {
                    !!sizes?.length && 
                    <>
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
                    </>
                }
                <QuantityBlock id={id} size={selectedSize} />
            </div>
        </div>
    )
}