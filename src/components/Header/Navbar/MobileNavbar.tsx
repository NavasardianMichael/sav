import CloseMenuIcon from '@mui/icons-material/Close';
import OpenMenuIcon from '@mui/icons-material/Menu';
import { FC, useState } from 'react';

import { combineClassNames } from 'helpers/functions/commons';

import { LinkList } from './LinkList';
import styles from './styles.module.scss';

export const MobileNavbar: FC = () => {

    const [opened, setOpened] = useState(false)

    const toggleMenu = () => {
        setOpened(prev => !prev)
    }

    return (
        <div className={combineClassNames(styles.mobileNavbar, opened ? styles.opened : styles.closed)}>
            <OpenMenuIcon fontSize='large' className={styles.openIcon} onClick={toggleMenu} />
            <div className={styles.menu}>
                <LinkList />
                <CloseMenuIcon fontSize='large' className={styles.closeIcon} onClick={toggleMenu} />
            </div>
        </div>
    )
}