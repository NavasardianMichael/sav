import { FC } from 'react';

import { HOME_PAGE_SECTIONS } from "helpers/constants/pages";
import { combineClassNames } from 'helpers/functions/commons';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectPriceListSourceId } from 'store/categories/selectors';

export const LinkList: FC = () => {

    const priceListSourceId = useSelector(selectPriceListSourceId)

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
                href={`https://drive.google.com/uc?export=download&id=${priceListSourceId}`} 
                download
            >
                Скачать прайс лист
            </a>
        </>
    )
}