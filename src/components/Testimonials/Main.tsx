import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Section } from 'components/Section/Main';
import { PAGE_SECTIONS } from 'helpers/constants/pages';
import { selectTestimonialSourceIds } from 'store/categories/selectors';

import styles from './styles.module.scss';

export const Testimonials: FC = () => {

    const testimonialSourceIds = useSelector(selectTestimonialSourceIds)

    if(!testimonialSourceIds?.length) return null;

    return (
        <Section id={PAGE_SECTIONS.byId.testimonials.id}>
            <div className={styles.testimonials}>
                {
                    testimonialSourceIds.map(id => {
                        return (
                            <div key={id} className={styles.testimonial}>
                                <img src={`https://drive.google.com/uc?id=${id}`} />
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}