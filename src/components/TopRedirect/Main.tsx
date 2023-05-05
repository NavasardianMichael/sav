import { FC, useEffect, useState } from "react";
import Icon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import styles from './styles.module.scss';
import { combineClassNames } from "helpers/functions/commons";

export const TopRedirect: FC = () => {

    const [ shown, setShownStatus ] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            setShownStatus(document.documentElement.scrollTop > 100)
        }
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={styles.topRedirect}>
            <button className={combineClassNames(styles.btn, shown ? undefined : styles.hidden)} onClick={handleClick}>
                <Icon className={styles.icon} />
            </button>
        </div>
    )
}