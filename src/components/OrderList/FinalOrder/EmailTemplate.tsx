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
            <h1 style={{textAlign: 'center'}}>С.А.В. Заказ</h1>
            <img src='https://img.freepik.com/premium-vector/my-order-list-flat-modern-design-illustration_566886-92.jpg' style={style} />
            <h2>Список</h2>
            <div style={{marginBottom: '32px'}}>
                <ol>
                    {
                        orders.map(order => {
                            const product = products.byId[order.productId]
                            return (
                                <li key={order.id}>
                                    <ul>
                                        <li><b>Название:</b> {product.name}</li>
                                        <li><b>Количество заказа:</b> {order.quantity} {getMeasureUnitCorrectedValue(product)}</li>
                                        {!!order.size && <li><b>Размер:</b> {order.size}</li>}
                                        <li><b>Количество в упаковке:</b> {product.quantityPerPack} {getMeasureUnitCorrectedValue(product)}</li>
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
            <img src='https://sav.am/wp-content/uploads/2021/09/50805196_390639838164141_8185031274633625600_n.png' style={style} />
        </div>
    )
}