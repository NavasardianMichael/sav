import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Section } from 'components/Section/Main';
import { HOME_PAGE_SECTIONS } from 'helpers/constants/pages';
import { getDriveImageUrlById } from 'helpers/functions/commons';
import { selectTestimonialSourceIds } from 'store/categories/selectors';

import styles from './styles.module.scss';

export const Testimonials: FC = () => {

    const testimonialSourceIds = useSelector(selectTestimonialSourceIds)

    if(!testimonialSourceIds?.length) return null;

    return (
        <Section id={HOME_PAGE_SECTIONS.byId.testimonials.id}>
            <div className={styles.testimonials}>
                {
                    testimonialSourceIds.map(id => {
                        return (
                            <div key={id} className={styles.testimonial}>
                                <img src={getDriveImageUrlById(id)} alt='testimonial screenshot' />
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}