import { FC, useCallback } from "react";
import styles from './styles.module.css'
import { PAGE_NAVIGATIONS } from "helpers/constants/pages";
import { NavLink, NavLinkProps } from "react-router-dom";
import { combineClassNames } from "helpers/functions/commons";

export const Header: FC = () => {

    const generateClassNames: NavLinkProps['className'] = ({ isActive }) => {
        return combineClassNames(styles.link, isActive ? styles.active : undefined)
    }

    return (
        <div className={styles.header}>
            {
                PAGE_NAVIGATIONS.map(({ id, name, path }) => {
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
        </div>
    )
}