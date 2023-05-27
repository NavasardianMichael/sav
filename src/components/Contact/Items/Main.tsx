import { FC } from "react";

import { CONTACT_ITEMS } from "helpers/constants/contacts";

import styles from './styles.module.scss';

export const Items: FC = () => {
    return (
        <>
            <div className={styles.linkItems}>
                {
                    CONTACT_ITEMS.withText.map(({id, title, href, prefix, text}) => {
                        return (
                                <a key={id} target='_blank' title={title} href={prefix + href}>
                                    {title}: {text}
                                </a>
                        )
                    })
                }
            </div>        
            <div className={styles.iconItems}>
                {
                    CONTACT_ITEMS.onlyIcons.map(({id, title, href, Icon, prefix, isIconCustom}) => {
                        return (
                                <a 
                                    key={id} 
                                    target='_blank' 
                                    title={title} 
                                    href={prefix + href}
                                    className={isIconCustom ? styles.customIconLink : undefined}
                                >
                                    <Icon fontSize='medium' />
                                </a>
                        )
                    })
                }
            </div>
        </>
    )
}