import { FC } from 'react'

import { PAGE_SECTIONS } from 'helpers/constants/pages'

export const About: FC = () => {
    return (
        <div id={PAGE_SECTIONS.byId.about.id}>
            {PAGE_SECTIONS.byId.about.name}
        </div>
    )
}