import sharedStyles from 'assets/styles/_shared.module.scss';
import { useOrderCount } from "hooks/useOrderCount";
import { useOrderDispatch } from "hooks/useOrderDispatch";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectOrderList } from "store/order/selectors";
import { T_OrderItem } from "store/order/types";
import { selectProducts } from "store/products/selectors";
import { Item } from './Item';
import styles from './styles.module.scss';

export const OrderList: FC = () => {

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
        remove(orderId)
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


    return (
        <div className={styles.ordersBlock}>
            <h2 className={sharedStyles['h-lg']}>Корзина ({count})</h2>
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
        </div>
    )
}