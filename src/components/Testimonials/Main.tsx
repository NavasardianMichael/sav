import { FC } from 'react';

import { Section } from 'components/Section/Main';
import { PAGE_SECTIONS } from 'helpers/constants/pages';

export const Testimonials: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.testimonials.id}>
            <p>Testimonials</p>
        </Section>
    )
}