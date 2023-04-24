import { FC } from 'react';

import { Section } from 'components/Section/Main';
import { PAGE_SECTIONS } from 'helpers/constants/pages';

export const About: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.about.id}>
            <p>About</p>
        </Section>
    )
}