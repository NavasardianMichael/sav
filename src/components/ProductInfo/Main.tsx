import { FC } from "react";
import styles from './styles.module.scss';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "index";
import { T_Product } from "store/products/types";

export const ProductInfo: FC = () => {
    const id = useParams().id as T_Product['id']
    const currentProduct = useSelector((state: RootState) => state.products.byId[id])

    if(!currentProduct) return null;

    return (
        <div className={styles.productInfo}>
            <div className={styles.imgWrapper}>
                <img src={currentProduct.imageUrl} alt={currentProduct.name} />
            </div>
            <div className={styles.details}>
                <h3>{currentProduct.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo vitae quidem architecto quaerat, accusantium a amet debitis tempora numquam exercitationem beatae sint accusamus aperiam perferendis maiores. Maiores, soluta. Officia.</p>
                <p>{currentProduct.price} руб.</p>
            </div>
        </div>
    )
}