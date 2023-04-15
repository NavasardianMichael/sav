import { CONTACT_FORM_TEMPLATE } from "helpers/constants/forms";
import { FC } from "react";

export const Form: FC = () => {

    const handleSendForm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        
    }

    return (
        <form>
            {
                CONTACT_FORM_TEMPLATE.map(field => {
                    if(field.isLongFormat) return (
                        <div key={field.name}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <textarea id={field.name} rows={4} />
                        </div>
                    )
                    return (
                        <div key={field.name}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <input id={field.name} />
                        </div>
                    )
                })
            }
            <button onClick={handleSendForm}>Отправить</button>
        </form>
    )
}