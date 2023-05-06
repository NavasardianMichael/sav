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

const imgStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: 'auto'
}

const liStyles: React.CSSProperties = {
    paddingBottom: '0.5rem'
}

export const EmailTemplate: FC<T_Props> = ({values, products, orders, categories, subCategories}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Заказ</h1>
            <img src='https://img.freepik.com/premium-vector/my-order-list-flat-modern-design-illustration_566886-92.jpg' style={imgStyles} />
            <h2>Список</h2>
            <div style={{marginBottom: '2rem'}}>
                <ol>
                    {
                        orders.map(order => {
                            const product = products.byId[order.productId]
                            const multiplePerPack = product.quantityPerPack !== 1
                            return (
                                <li key={order.id} style={{marginBottom: '1rem'}}>
                                    <ul style={{paddingLeft: '12px', listStyleType: 'square'}}>
                                        <h3>{product.name} (id: {product.id})</h3>
                                        <li style={liStyles}><b>Количество заказа:</b> {order.quantity} {getMeasureUnitCorrectedValue(product)}</li>
                                        {!!order.size && <li style={liStyles}><b>Размер:</b> {order.size}</li>}
                                        {multiplePerPack && <li style={liStyles}><b>Количество в упаковке:</b> {product.quantityPerPack} {getMeasureUnitCorrectedValue(product)}</li>}
                                        <li style={liStyles}>
                                            <b>Категоризация: </b> 
                                            {categories.byId[subCategories.byId[products.byId[product.id].subCategoryId].categoryId].name}
                                            &nbsp;/&nbsp;
                                            {subCategories.byId[products.byId[product.id].subCategoryId].name}</li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            <h2>Контакты</h2>
            <div>
                <ul style={{listStyleType: 'square'}}>
                    {
                        CONTACT_FORM_TEMPLATE.map(field => {
                            return (
                                <li key={field.id} style={liStyles}>
                                    {field.label}: {values[field.name]}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}