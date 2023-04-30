import Logo from 'assets/images/logo.svg';
import { CONTACT_ITEMS } from "helpers/constants/contacts";
import { FC } from "react";
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
                <div className={styles.linkItems}>
                    {
                        CONTACT_ITEMS.withText.map(({id, title, href, Icon, prefix, text}) => {
                            return (
                                    <a key={id} target='_blank' title={title} href={prefix + href}>
                                        <Icon fontSize='medium' /> {text}
                                    </a>
                            )
                        })
                    }
                    <div className={styles.iconItems}>
                        {
                            CONTACT_ITEMS.onlyIcons.map(({id, title, href, Icon, prefix}) => {
                                return (
                                        <a key={id} target='_blank' title={title} href={prefix + href}>
                                            <Icon fontSize='medium' />
                                        </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.lowerBlock}>
                © 2023 САВ ГРУП. Все права защищены
            </div>
        </div>
    )
}