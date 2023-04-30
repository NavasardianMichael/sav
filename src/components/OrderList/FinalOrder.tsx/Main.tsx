import sharedStyles from 'assets/styles/_shared.module.scss';
import { EmailTemplate } from 'components/Chat/EmailTemplate';
import { SuccessMessage } from 'components/Chat/SuccessMessage';
import { ContactForm } from 'components/ContactForm/Main';
import { combineClassNames } from 'helpers/functions/commons';
import { FC } from 'react';
import styles from './styles.module.scss';

type T_Props = {
    opened: boolean
    closeOrderDetails: React.MouseEventHandler<HTMLButtonElement>
}

export const FinalOrder: FC<T_Props> = ({ closeOrderDetails }) => {
    return (
        <div className={styles.container}>
            <button className={styles.closeBtn} onClick={closeOrderDetails}>
                &#10006;
            </button>
            <h2 className={combineClassNames(sharedStyles['h-md'], sharedStyles['mt-0'])}>Детали</h2>
            <div className={styles.orderDetailsForm}>
                <ContactForm EmailTemplate={EmailTemplate} SuccessMessageTemplate={SuccessMessage} />
            </div>
        </div>
    )
}