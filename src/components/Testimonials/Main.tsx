import { FC } from 'react';

import { Section } from 'components/Section/Main';
import { PAGE_SECTIONS } from 'helpers/constants/pages';
import styles from './styles.module.scss';

export const Testimonials: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.testimonials.id} className={styles.testimonials}>
            <p>Testimonials</p>
        </Section>
    )
}