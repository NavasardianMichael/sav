import { FC, useEffect } from "react";
import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Home } from "pages/Home";
import { Navigate, Route, Routes } from "react-router";
import styles from './styles.module.css';
import { Order } from "pages/Order";
import { useDispatch } from "react-redux";
import { setOrderItems } from "store/order/actionCreators";
import { getOrderLocalStorage } from "helpers/functions/order";
import { Product } from "pages/Product";

export const Content: FC = () => {

    const dispatch = useDispatch()
    const { value } = getOrderLocalStorage()

    useEffect(() => {
        if(!value) return;
        dispatch(setOrderItems(value))
    }, [dispatch])

    return (
        <div className={styles.content}>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/order' element={<Order />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </div>
    )
}