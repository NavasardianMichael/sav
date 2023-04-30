import { FC } from 'react';

import { HOME_PAGE_SECTIONS } from "helpers/constants/pages";

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
                            className={styles.link}
                        >
                            {section.name} 
                        </a>
                    )
                })
            }
        </>
    )
}