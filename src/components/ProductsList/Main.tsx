import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrderLocalStorage } from "helpers/functions/order";
import { selectCategories } from "store/categories/selectors";
import { setOrderItems } from "store/order/actionCreators";
import { selectProducts } from "store/products/selectors";
import { selectSubCategories } from "store/subCategories/selectors";

import { Categories } from "./Categories/Main";
import styles from './styles.module.css';

export const ProductsLists: FC = () => {

    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const subCategories = useSelector(selectSubCategories)
    const { addOrder } = getOrderLocalStorage()
console.log({categories, subCategories});

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        e.preventDefault()
        const order = {
            id: '1',
            productId: '1',
            quantity: 100
        }
        dispatch(setOrderItems([order]))
        addOrder(order)
    }

    return (
        <div className={styles.productsList}>
            <Categories />
        </div>
    )
}