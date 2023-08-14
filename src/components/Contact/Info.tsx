import { FC } from 'react';

import { Items } from './Items/Main';
import styles from './styles.module.scss';

export const Info: FC = () => {
    return (
        <div className={styles.info}>
            <div className={styles.initialInfo}>
                <p>Режим работы: пн-пт 9:00-19:00</p>
                <a href='https://goo.gl/maps/wPq7wBzDhxo6aNPW7' target='_blank'>143033, Российская Федерация, Московская обл., г.Одинцово</a>
                <p>
                    ОГРН 1215000026680<br />
                    ИНН 5032326565 КПП 503201001<br />
                    ОКПО 47613856<br />
                    Банковские реквизиты:<br />
                    АО «АЛЬФА-БАНК»<br />
                    р/с 40702810201600013893<br />
                    к/с 30101810200000000593<br />
                    БИК 044525593<br />
                </p>
            </div>
            <Items />
        </div>
    )
}