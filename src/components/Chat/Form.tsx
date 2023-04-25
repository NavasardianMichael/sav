import { ContactForm } from "components/ContactForm/Main";
import { FC } from "react";
import { EmailTemplate } from "./EmailTemplate";
import { SuccessMessage } from "./SuccessMessage";
import styles from './styles.module.scss';

export const Form: FC = () => {
    return (
        <div className={styles.contactIconForm}>
            <ContactForm 
                EmailTemplate={EmailTemplate}
                SuccessMessageTemplate={SuccessMessage}
            />
        </div>
    )
}