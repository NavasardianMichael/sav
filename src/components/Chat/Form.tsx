import { FC, useMemo } from "react";

import { ContactForm } from "components/ContactForm/Main";
import { EMAIL_SUBJECTS } from "helpers/constants/forms";

import { T_PendingSettings } from "helpers/types";
import { EmailTemplate } from "./EmailTemplate";
import { SuccessMessage } from "./SuccessMessage";
import styles from './styles.module.scss';

export const Form: FC = () => {
    
    const pendingSettings = useMemo<T_PendingSettings>(() => {
        return {
            statusKey: 'isPendingContactEmail',
        }
    }, [])

    return (
        <div className={styles.contactIconForm}>
            <ContactForm 
                EmailTemplate={EmailTemplate}
                SuccessMessageTemplate={SuccessMessage}
                emailSubject={EMAIL_SUBJECTS.contact}
                pendingSettings={pendingSettings}
            />
        </div>
    )
}