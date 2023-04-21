import CloseMenuIcon from '@mui/icons-material/Close';
import OpenMenuIcon from '@mui/icons-material/Menu';
import { FC, useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { PAGE_NAVIGATIONS } from 'helpers/constants/pages';
import { combineClassNames } from 'helpers/functions/commons';

import styles from './styles.module.scss';

export const MobileNavbar: FC = () => {

    const [opened, setOpened] = useState(false)
    const [ _, ...pages ] = PAGE_NAVIGATIONS

    const generateClassNames: NavLinkProps['className'] = ({ isActive }) => {
        return combineClassNames(styles.link, isActive ? styles.active : undefined)
    }

    const toggleMenu = () => {
        setOpened(prev => !prev)
    }

    return (
        <div className={combineClassNames(styles.mobileNavbar, opened ? styles.opened : styles.closed)}>
            <OpenMenuIcon fontSize='large' className={styles.openIcon} onClick={toggleMenu} />
            <div className={styles.menu}>
                {
                    pages.map(({ id, name, path }) => {
                        return (
                            <NavLink
                            key={id}
                            to={path}
                            className={generateClassNames}
                            >
                                {name} 
                            </NavLink>
                        )
                    })
                }
                <CloseMenuIcon fontSize='large' className={styles.closeIcon} onClick={toggleMenu} />
            </div>
        </div>
    )
}