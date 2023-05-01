import { FC, useMemo } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { ContactForm } from 'components/ContactForm/Main';
import { Section } from 'components/Section/Main';
import { EMAIL_SUBJECTS } from 'helpers/constants/forms';
import { HOME_PAGE_SECTIONS } from 'helpers/constants/pages';

import { T_PendingSettings } from 'helpers/types';
import { EmailTemplate } from './EmailTemplate';
import { Info } from './Info';
import styles from './styles.module.scss';
import { SuccessMessage } from './SuccessMessage';

export const Contact: FC = () => {
    const pendingSettings = useMemo<T_PendingSettings>(() => {
        return {
            statusKey: 'isFetchingMainData',
            allPage: true
        }
    }, [])
    return (
        <Section id={HOME_PAGE_SECTIONS.byId.contact.id} className={styles.contact}>
            <Info />
            <div className={styles.contactSectionForm}>
                <p className={sharedStyles['h-md']}>Свяжитеь с нами</p>
                <ContactForm 
                    EmailTemplate={EmailTemplate} 
                    SuccessMessageTemplate={SuccessMessage}
                    emailSubject={EMAIL_SUBJECTS.contact}
                    pendingSettings={pendingSettings}
                />
            </div>
        </Section>
    )
}