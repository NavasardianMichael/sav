import { Section } from 'components/Section/Main';
import { ABOUT_SECTIONS } from 'helpers/constants/about';
import { HOME_PAGE_SECTIONS } from 'helpers/constants/pages';
import { combineClassNames } from 'helpers/functions/commons';
import { FC } from 'react';
import styles from './styles.module.scss';

export const About: FC = () => {
    return (
        <Section id={HOME_PAGE_SECTIONS.byId.about.id} className={styles.about}>
            <>
                {
                    ABOUT_SECTIONS.map(section => {
                        const { id, name, title, flexType, imgPath, description } = section
                        return (
                            <div key={id} className={combineClassNames(styles.section, styles[flexType])}>
                                <img src={imgPath} title={name} alt={name} />
                                <div className={styles.info}>
                                    <h3 className={styles.title}>
                                        {title}
                                    </h3>
                                    <p className={styles.description}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        </Section>
    )
}