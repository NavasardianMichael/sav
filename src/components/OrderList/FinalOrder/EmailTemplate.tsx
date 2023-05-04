import { FC } from 'react'

import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms"
import { getMeasureUnitCorrectedValue } from 'helpers/functions/order'
import { T_CategoriesState } from 'store/categories/types'
import { T_OrderState } from 'store/order/types'
import { T_ProductsState } from 'store/products/types'
import { T_SubCategoriesState } from 'store/subCategories/types'

type T_Props = {
    values: {[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}
    products: T_ProductsState
    orders: T_OrderState['list']
    categories: T_CategoriesState
    subCategories: T_SubCategoriesState
}

const style: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: 'auto'
}

export const EmailTemplate: FC<T_Props> = ({values, products, orders, categories, subCategories}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Заказ</h1>
            <img src='https://img.freepik.com/premium-vector/my-order-list-flat-modern-design-illustration_566886-92.jpg' style={style} />
            <h2>Список</h2>
            <div style={{marginBottom: '32px'}}>
                <ol style={{paddingLeft: 0}}>
                    {
                        orders.map(order => {
                            const product = products.byId[order.productId]
                            const multiplePerPack = product.quantityPerPack !== 1
                            return (
                                <li key={order.id} style={{marginBottom: '1rem'}}>
                                    <ul style={{paddingLeft: '12px'}}>
                                        <h3>{product.name} (идентификатор: {product.id})</h3>
                                        <li><b>Количество заказа:</b> {order.quantity} {getMeasureUnitCorrectedValue(product)}</li>
                                        {!!order.size && <li><b>Размер:</b> {order.size}</li>}
                                        {multiplePerPack && <li><b>Количество в упаковке:</b> {product.quantityPerPack} {getMeasureUnitCorrectedValue(product)}</li>}
                                        <li><b>Категория:</b> {categories.byId[subCategories.byId[products.byId[product.id].subCategoryId].categoryId].name}</li>
                                        <li><b>Подкатегория:</b> {subCategories.byId[products.byId[product.id].subCategoryId].name}</li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ol>
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