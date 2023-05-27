import { FC } from "react";

import Logo from 'assets/images/logo.svg';
import { Items } from 'components/Contact/Items/Main';

import styles from './styles.module.css';

export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.upperBlock}>
                <div className={styles.logo}>
                    <div>
                        <img src={Logo} />
                    </div>
                </div>
                <Items />
            </div>
            <div className={styles.lowerBlock}>
                © 2023 САВ ГРУП. Все права защищены
            </div>
        </div>
    )
}