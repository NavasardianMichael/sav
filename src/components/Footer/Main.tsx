import { FC } from "react";
import styles from './styles.module.css'
import { CONTACT_ITEMS } from "helpers/constants/contacts";
import Logo from 'assets/images/logo.svg'

export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.upperBlock}>
                <div className={styles.logo}>
                    <img src={Logo} />
                </div>
                <div className={styles.itemsWithText}>
                    {
                        CONTACT_ITEMS.withText.map(({id, title, href, Icon, prefix, text}) => {
                            return (
                                <div key={id}>
                                    <a target='_blank' title={title} href={prefix + href}>
                                        <Icon /> {text}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.lowerBlock}>
                © 2023 САВ ГРУП. Все права защищены
            </div>
        </div>
    )
}