import { CONTACT_FORM_FIELD_NAMES, CONTACT_FORM_TEMPLATE } from "helpers/constants/forms";
import { FC, useEffect, useState } from "react";
import styles from './styles.module.scss'
import { validateEmail } from "helpers/functions/commons";
import { sendEmail } from "api/email/api";
import ReactDOMServer  from 'react-dom/server'
import { MailTemplate } from "./MailTemplate";
import { useDispatch } from "react-redux";
import { setAppearanceOptions } from "store/appearance/actionCreators";
import { SuccessMessage } from "./SuccessMessage";

export const Form: FC = () => {

    const dispatch = useDispatch()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [validities, setValidities] = useState<{[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: boolean}>({
        [CONTACT_FORM_FIELD_NAMES.name]: false,
        [CONTACT_FORM_FIELD_NAMES.email]: false,
        [CONTACT_FORM_FIELD_NAMES.phone]: false,
        [CONTACT_FORM_FIELD_NAMES.content]: false,
    })
    const [values, setValues] = useState<{[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}>({
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
        
        dispatch(setAppearanceOptions({isPendingContactEmail: true}))
        await sendEmail({
            subject: 'Сообщение в службу поддержки',
            body: ReactDOMServer.renderToStaticMarkup(
                <MailTemplate values={values}  />
            ),
        })
        dispatch(setAppearanceOptions({isPendingContactEmail: false}))
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

    if(showSuccessMessage) return <SuccessMessage />

    return (
        <form>
            {
                CONTACT_FORM_TEMPLATE.map(({id, isLongFormat, label, name}) => {
                    return (
                        <div key={id} className={validities[name] ? styles.invalid : undefined}>
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
            <button onClick={handleSendForm}>Отправить</button>
        </form>
    )
}