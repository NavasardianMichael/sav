import sharedStyles from 'assets/styles/_shared.module.scss';
import { ContactForm } from 'components/ContactForm/Main';
import { Section } from 'components/Section/Main';
import { PAGE_SECTIONS } from 'helpers/constants/pages';
import { FC } from 'react';
import { EmailTemplate } from './EmailTemplate';
import { Info } from './Info';
import { SuccessMessage } from './SuccessMessage';
import styles from './styles.module.scss';

export const Contact: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.contact.id} className={styles.contact}>
            <Info />
            <div className={styles.contactSectionForm}>
                <p className={sharedStyles['h-md']}>Свяжитеь с нами</p>
                <ContactForm 
                    EmailTemplate={EmailTemplate} 
                    SuccessMessageTemplate={SuccessMessage}
                />
            </div>
        </Section>
    )
}