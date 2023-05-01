import { FC, useMemo } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { SuccessMessage } from 'components/Chat/SuccessMessage';
import { ContactForm } from 'components/ContactForm/Main';
import { EMAIL_SUBJECTS } from 'helpers/constants/forms';
import { combineClassNames } from 'helpers/functions/commons';

import { T_PendingSettings } from 'helpers/types';
import { EmailTemplate } from './EmailTemplate';
import styles from './styles.module.scss';

type T_Props = {
    opened: boolean
    closeOrderDetails: React.MouseEventHandler<HTMLButtonElement>
}

export const FinalOrder: FC<T_Props> = ({ closeOrderDetails }) => {

    const pendingSettings = useMemo<T_PendingSettings>(() => {
        return {
            statusKey: 'isFetchingMainData',
            allPage: true
        }
    }, [])

    return (
        <div className={styles.container}>
            <button className={styles.closeBtn} onClick={closeOrderDetails}>
                &#10006;
            </button>
            <h2 className={combineClassNames(sharedStyles['h-md'], sharedStyles['mt-0'], sharedStyles['mb-0'])}>Детали</h2>
            <p>* Предоставьте контактные данные, наши специалисты свяжутся с вами.</p>
            <div className={styles.orderDetailsForm}>
                <ContactForm 
                    EmailTemplate={EmailTemplate}
                    SuccessMessageTemplate={SuccessMessage}
                    emailSubject={EMAIL_SUBJECTS.order}
                    pendingSettings={pendingSettings}
                />
            </div>
        </div>
    )
}