import { FC } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { ContactForm } from 'components/ContactForm/Main';
import { Section } from 'components/Section/Main';
import { EMAIL_SUBJECTS } from 'helpers/constants/forms';
import { PAGE_SECTIONS } from 'helpers/constants/pages';

import { EmailTemplate } from './EmailTemplate';
import { Info } from './Info';
import styles from './styles.module.scss';
import { SuccessMessage } from './SuccessMessage';

export const Contact: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.contact.id} className={styles.contact}>
            <Info />
            <div className={styles.contactSectionForm}>
                <p className={sharedStyles['h-md']}>Свяжитеь с нами</p>
                <ContactForm 
                    EmailTemplate={EmailTemplate} 
                    SuccessMessageTemplate={SuccessMessage}
                    emailSubject={EMAIL_SUBJECTS.contact}
                />
            </div>
        </Section>
    )
}