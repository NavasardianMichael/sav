import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import sharedStyles from 'assets/styles/_shared.module.scss';
import { Portal } from 'components/Portal/Main';
import { APP_PAGES } from "helpers/constants/pages";
import { useOrderCount } from "hooks/useOrderCount";
import { useOrderDispatch } from "hooks/useOrderDispatch";
import { setAppearanceOptions } from "store/appearance/actionCreators";
import { selectOrderList } from "store/order/selectors";
import { T_OrderItem } from "store/order/types";
import { selectProducts } from "store/products/selectors";

import { FinalOrder } from './FinalOrder/Main';
import { Item } from './Item';
import styles from './styles.module.scss';
import { combineClassNames } from "helpers/functions/commons";

export const OrderList: FC = () => {

    const dispatch = useDispatch()
    const [ orderDetialsOpened, setOrderDetailsOpened ] = useState(false)
    const products = useSelector(selectProducts)
    const orders = useSelector(selectOrderList)
    const { edit, remove } = useOrderDispatch()
    const count = useOrderCount()

    if(!products?.allIds?.length) return null

    const handleCountUnitChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const { name } = e.currentTarget
        const orderId = e.currentTarget.getAttribute('data-orderid') as T_OrderItem['id']
        const order = orders.find(order => order.id === orderId) as T_OrderItem
        
        if(name === 'decrement' && order.quantity <= 1) return 
        
        edit({
            ...order,
            quantity: name === 'increment' ? order.quantity + 1 : order.quantity - 1 
        })
    }
    
    const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget
        
        const orderId = e.currentTarget.getAttribute('data-orderid') as T_OrderItem['id']
        const order = orders.find(order => order.id === orderId) as T_OrderItem
        if(value && +value < 1) return 

        edit({
            ...order,
            quantity: +value ?? ''
        })       
    }

    const handleRemoveOrderClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const orderId = e.currentTarget.getAttribute('data-orderid') as T_OrderItem['id']
        const order = orders.find(order => order.id === orderId) as T_OrderItem
        remove(order)
    }

    const handleCountInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if(e.currentTarget.value) return;
        const orderId = e.currentTarget.getAttribute('data-orderid') as T_OrderItem['id']
        const order = orders.find(order => order.id === orderId) as T_OrderItem
        edit({
            ...order,
            quantity: 1
        })
    }

    const closeOrderDetails: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        setOrderDetailsOpened(false)
    }

    const openOrderDetails: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        setOrderDetailsOpened(true)
    }

    const handleResetOrders = () => {
        orders.forEach(order => {
            remove(order)
        })
    }

    const handleBackBtnClick = () => {
        dispatch(setAppearanceOptions({activePage: APP_PAGES.home}))
    }


    return (
        <div className={styles.ordersBlock}>
            <div className={styles.headerWrapper}>
                <button
                    className={styles.backBtn}
                    onClick={handleBackBtnClick}
                >
                    &#x2039; продолжить покупки
                </button>
                <div className={styles.header}>
                    <h2 className={combineClassNames(sharedStyles['h-lg'], styles.title)}>Корзина ({count})</h2>
                    {!!orders?.length && <button onClick={handleResetOrders}>Очистить корзину</button>}
                </div>
            </div>
            <div className={styles.ordersList}>
                {
                    orders.map(order => {
                        return (
                            <Item 
                                key={order.id}
                                order={order}
                                product={products.byId[order.productId]}
                                handleCountUnitChange={handleCountUnitChange}
                                handleCountChange={handleCountChange}
                                handleRemoveButtonClick={handleRemoveOrderClick}
                                handleCountInputBlur={handleCountInputBlur}
                            />
                        )
                    })
                }
            </div>
            { !!count && <button className={styles.orderBtn} onClick={openOrderDetails}>Заказать</button> }
            <Portal opened={orderDetialsOpened} className={styles.finalOrder} setOpenedStatus={setOrderDetailsOpened}>
                <FinalOrder 
                    key='order-details-portal-content'
                    opened={orderDetialsOpened}
                    closeOrderDetails={closeOrderDetails}
                />
            </Portal>
        </div>
    )
}