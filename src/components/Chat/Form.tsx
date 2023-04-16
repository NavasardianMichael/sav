import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms";
import { FC, useState } from "react";
import styles from './styles.module.css'
import { validateEmail } from "helpers/functions/commons";
import { sendEmail } from "api/email/api";
import ReactDOMServer  from 'react-dom/server'
import { MailTemplate } from "./MailTemplate";
import { useDispatch } from "react-redux";
import { setAppearanceOptions } from "store/appearance/actionCreators";

export const Form: FC = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const dispatch = useDispatch()

    const [validities, setValidities] = useState<{[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: boolean}>({
        "contact-form-name": false,
        "contact-form-email": false,
        "contact-form-phone": false,
        "contact-form-content": false,
    })
    const [values, setValues] = useState<{[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}>({
        "contact-form-name": '',
        "contact-form-email": '',
        "contact-form-phone": '',
        "contact-form-content": '',
    })

    const handleSendForm: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()
        const currentValidities = {
            "contact-form-name": !values['contact-form-name'],
            "contact-form-phone": !values['contact-form-phone'],
            "contact-form-email": !values['contact-form-email'] || !validateEmail(values['contact-form-email']),
            "contact-form-content": !values['contact-form-content'],
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
        setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000)
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

    if(showSuccessMessage) {
        return <div>Отправлено!</div>
    }

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