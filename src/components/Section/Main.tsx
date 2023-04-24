import { FC } from 'react';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { PAGE_SECTIONS } from 'helpers/constants/pages';

type T_Props = {
    id: keyof typeof PAGE_SECTIONS.byId
    children: JSX.Element | JSX.Element[] 
}

export const Section: FC<T_Props> = ({ id, children }) => {
    return (
        <div id={id}>
            <h2 className={sharedStyles['h-lg']}>
                {PAGE_SECTIONS.byId[id].name}
            </h2>
            { children }
        </div>
    )
}