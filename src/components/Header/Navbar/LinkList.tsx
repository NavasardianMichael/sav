import { FC } from 'react';

import { HOME_PAGE_SECTIONS } from "helpers/constants/pages";
import { combineClassNames } from 'helpers/functions/commons';

import styles from './styles.module.scss';

export const LinkList: FC = () => {
    return (
        <>
            {
                HOME_PAGE_SECTIONS.allIds.map(id => {
                    const section = HOME_PAGE_SECTIONS.byId[id]
                    return (
                        <a
                            key={id}
                            href={`#${section.id}`}
                            className={combineClassNames(styles.link, section.hideOnMobile ? styles.hideOnMobile : undefined)}
                        >
                            {section.name} 
                        </a>
                    )
                })
            }
            <a 
                className={styles.link}
                href="https://drive.google.com/uc?export=download&id=1HkGV_e_ceCwFV8dyMcl0WP0xz7y2VLJq" 
                download
            >
                Скачать прайс лист
            </a>
        </>
    )
}