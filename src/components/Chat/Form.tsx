import { FC } from "react";

import { ContactForm } from "components/ContactForm/Main";
import { EMAIL_SUBJECTS } from "helpers/constants/forms";

import { EmailTemplate } from "./EmailTemplate";
import styles from './styles.module.scss';
import { SuccessMessage } from "./SuccessMessage";

export const Form: FC = () => {
    return (
        <div className={styles.contactIconForm}>
            <ContactForm 
                EmailTemplate={EmailTemplate}
                SuccessMessageTemplate={SuccessMessage}
                emailSubject={EMAIL_SUBJECTS.contact}
            />
        </div>
    )
}