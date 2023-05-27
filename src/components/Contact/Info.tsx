import { FC } from 'react';

import { Items } from './Items/Main';
import styles from './styles.module.scss';

export const Info: FC = () => {
    return (
        <div className={styles.info}>
            <div className={styles.initialInfo}>
                <p>С понедельника по пятницу: 09:00 - 18:00</p>
                <p>Суббота: 09:00-13:00</p>
                <a href='https://www.google.com/maps/place/SAV+holding/@40.2413201,44.5751578,15z/data=!4m6!3m5!1s0x406aa3d2eca95fef:0xdf89768077366d14!8m2!3d40.2413201!4d44.5751578!16s%2Fg%2F11k9s3_7lj' target='_blank'>Адрес: Котайк, Ариндж, 1-я улица, Ереван</a>
            </div>
            <Items />
        </div>
    )
}