import { FC } from 'react'

import { PAGE_SECTIONS } from 'helpers/constants/pages'

export const Testimonials: FC = () => {
    return (
        <div id={PAGE_SECTIONS.byId.testimonials.id}>
            {PAGE_SECTIONS.byId.testimonials.name}
        </div>
    )
}