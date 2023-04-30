import { FC } from 'react'

import { useOrderCount } from 'hooks/useOrderCount'

import styles from './styles.module.scss'

export const Badge: FC = () => {

    const count = useOrderCount()

    if(!count) return null;

    return (
        <div className={styles.badge}>
            {count}
        </div>
    )
}