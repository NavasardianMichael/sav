import { FC } from 'react'

import { PAGE_SECTIONS } from 'helpers/constants/pages'

export const Contact: FC = () => {
    return (
        <div id={PAGE_SECTIONS.byId.contact.id}>
            {PAGE_SECTIONS.byId.contact.name}
        </div>
    )
}