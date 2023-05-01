import { FC, useEffect, useState } from 'react'

import { useOrderCount } from 'hooks/useOrderCount'

import { combineClassNames } from 'helpers/functions/commons'
import styles from './styles.module.scss'

export const Badge: FC = () => {

    const count = useOrderCount()
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        setIsAnimating(true)
        const tm = setTimeout(() => {
            setIsAnimating(false)
        }, 2000)
        return () => clearTimeout(tm)
    }, [count])

    if(!count) return null;

    return (
        <div className={combineClassNames(styles.badge, isAnimating ? styles.animating : undefined)}>
            {count}
        </div>
    )
}