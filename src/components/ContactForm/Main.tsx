import { FC, useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { useDispatch } from "react-redux";

import { sendEmail } from "api/email/api";
import { CONTACT_FORM_FIELD_NAMES, CONTACT_FORM_TEMPLATE } from "helpers/constants/forms";
import { combineClassNames, validateEmail } from "helpers/functions/commons";
import { setAppearanceOptions } from "store/appearance/actionCreators";

import { Loader } from "components/Loader/Main";
import { T_PendingSettings } from "helpers/types";
import { useSelector } from "react-redux";
import { selectCategories } from "store/categories/selectors";
import { T_CategoriesState } from "store/categories/types";
import { selectOrderList } from "store/order/selectors";
import { T_OrderState } from "store/order/types";
import { selectProducts } from "store/products/selectors";
import { T_ProductsState } from "store/products/types";
import { selectSubCategories } from "store/subCategories/selectors";
import { T_SubCategoriesState } from "store/subCategories/types";
import styles from './styles.module.scss';

type G_ContactFormUtil<T> = {[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: T} 

type T_Props = {
    SuccessMessageTemplate: FC
    EmailTemplate: FC<{
        values: G_ContactFormUtil<string>
        products: T_ProductsState
        categories: T_CategoriesState
        subCategories: T_SubCategoriesState
        orders: T_OrderState['list']
    }>
    emailSubject: string
    pendingSettings: T_PendingSettings
    emailSentCallback?: () => void
}

export const ContactForm: FC<T_Props> = ({ EmailTemplate, SuccessMessageTemplate, emailSubject, pendingSettings, emailSentCallback }) => {

    const dispatch = useDispatch()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const categories = useSelector(selectCategories)
    const subCategories = useSelector(selectSubCategories)
    const products = useSelector(selectProducts)
    const orderList = useSelector(selectOrderList)

    const [validities, setValidities] = useState<G_ContactFormUtil<boolean>>({
        [CONTACT_FORM_FIELD_NAMES.name]: false,
        [CONTACT_FORM_FIELD_NAMES.email]: false,
        [CONTACT_FORM_FIELD_NAMES.phone]: false,
        [CONTACT_FORM_FIELD_NAMES.content]: false,
    })
    const [values, setValues] = useState<G_ContactFormUtil<string>>({
        [CONTACT_FORM_FIELD_NAMES.name]: '',
        [CONTACT_FORM_FIELD_NAMES.email]: '',
        [CONTACT_FORM_FIELD_NAMES.phone]: '',
        [CONTACT_FORM_FIELD_NAMES.content]: '',
    })

    const handleSendForm: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()
        const currentValidities = {
            [CONTACT_FORM_FIELD_NAMES.name]: !values['contact-form-name'],
            [CONTACT_FORM_FIELD_NAMES.phone]: !values['contact-form-phone'],
            [CONTACT_FORM_FIELD_NAMES.email]: !values['contact-form-email'] || !validateEmail(values['contact-form-email']),
            [CONTACT_FORM_FIELD_NAMES.content]: !values['contact-form-content'],
        } 
        setValidities(currentValidities)

        if(Object.values(currentValidities).includes(true)) return;

        dispatch(setAppearanceOptions({[pendingSettings.statusKey]: true}))
        await sendEmail({
            subject: emailSubject,
            body: ReactDOMServer.renderToStaticMarkup(
                <EmailTemplate 
                    values={values} 
                    orders={orderList} 
                    products={products}
                    categories={categories}  
                    subCategories={subCategories}  
                />
            ),
        })
        emailSentCallback?.()
        dispatch(setAppearanceOptions({[pendingSettings.statusKey]: false}))
        setShowSuccessMessage(true)
    }

    const handleFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { value } = e.target
        const id = e.target.id as (typeof CONTACT_FORM_TEMPLATE[number])['name']
        if(validities[id]) setValidities(prev => ({
            ...prev,
            [id]: false
        }))
        setValues(prev => ({
            ...prev,
            [id]: value
        }))
    }

    useEffect(() => {
        return () => {
            if(showSuccessMessage) setShowSuccessMessage(false)
        }
    }, [])

    if(showSuccessMessage) return <SuccessMessageTemplate />

    return (
        <>
            <Loader {...pendingSettings} />
            <form>
                {
                    CONTACT_FORM_TEMPLATE.map(({id, isLongFormat, label, name}) => {
                        return (
                            <div key={id} className={combineClassNames(styles.inputBlock, validities[name] ? styles.invalid : undefined)}>
                                <label htmlFor={name}>{label} *</label>
                                {
                                    isLongFormat ?
                                    <textarea id={name} rows={4} value={values[name]} onChange={handleFieldChange} /> :
                                    <input id={name} value={values[name]} onChange={handleFieldChange} />
                                }
                            </div>
                        )
                    })
                }
                <div>
                    <button onClick={handleSendForm}>Отправить</button>
                </div>
            </form>
        </>
    )
}