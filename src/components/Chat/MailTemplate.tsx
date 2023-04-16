import { FC } from 'react'
import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms"

type T_Props = {
    values: {[key in (typeof CONTACT_FORM_TEMPLATE[number])['name']]: string}
}

export const MailTemplate: FC<T_Props> = ({values}) => {
    return (
        <div>
            <hr />
            {
                CONTACT_FORM_TEMPLATE.map(field => {
                    return (
                        <div key={field.id}>
                            <span>{field.label}</span>:
                            <span> {values[field.name]}</span>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}