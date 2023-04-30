import { FC } from 'react'

import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms"
import { T_OrderState } from 'store/order/types'
import { T_ProductsState } from 'store/products/types'

type T_Props = {
    values: {[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}
    products: T_ProductsState
    orders: T_OrderState['list']
}

const style: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: 'auto'
}

export const EmailTemplate: FC<T_Props> = ({values, products, orders}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>С.А.В. Заказ</h1>
            <img src='https://img.freepik.com/premium-vector/my-order-list-flat-modern-design-illustration_566886-92.jpg' style={style} />
            <h2>Список</h2>
            <div style={{marginBottom: '32px'}}>
                {
                    orders.map(order => {
                        const product = products.byId[order.productId]
                        return (
                            <p key={order.productId}>
                                {product.name}: <b>&times; {order.quantity}</b>
                            </p>                            
                        )
                    })
                }
            </div>
            <h2>Контакты</h2>
            <div>
                {
                    CONTACT_FORM_TEMPLATE.map(field => {
                        return (
                            <p key={field.id}>
                                {field.label}: {values[field.name]}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}