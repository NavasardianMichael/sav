import { Footer } from "components/Footer/Main";
import { getOrderLocalStorage } from "helpers/functions/order";
import { Home } from "pages/Home";
import { Order } from "pages/Order";
import { Product } from "pages/Product";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { setOrderItems } from "store/order/actionCreators";
import styles from './styles.module.scss';

export const Content: FC = () => {

    const dispatch = useDispatch()
    const { value } = getOrderLocalStorage()

    useEffect(() => {
        if(!value) return;
        dispatch(setOrderItems(value))
    }, [dispatch])

    return (
        <div className={styles.content}>
            <div className={styles.currentPageContent}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}