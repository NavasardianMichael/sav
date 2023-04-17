import { FC } from 'react'
import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms"

type T_Props = {
    values: {[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}
}

const style: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: 'auto'
}

export const MailTemplate: FC<T_Props> = ({values}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Сообщение от пожалователя в службу поддержки SAV</h1>
            <img src='https://cdn.templates.unlayer.com/assets/1681100988650-Asset%201.png' style={style} />
            {
                CONTACT_FORM_TEMPLATE.map(field => {
                    return (
                        <h3 key={field.id}>
                            {field.label}: {values[field.name]}
                        </h3>
                    )
                })
            }
        </div>
    )
}