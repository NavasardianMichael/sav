import { FC } from "react";
import { Categories } from "./Categories/Main";
import styles from './styles.module.css';

export const ProductsLists: FC = () => {
    return (
        <div className={styles.productsList}>
            <Categories />
        </div>
    )
}