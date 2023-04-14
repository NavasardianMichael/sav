import { FC } from "react";
import Logo from 'assets/images/logo.svg'
import styles from './styles.module.css'
import { PAGE_NAVIGATIONS } from "helpers/constants/pages";
import { NavLink, NavLinkProps } from "react-router-dom";
import { combineClassNames } from "helpers/functions/commons";

export const Header: FC = () => {

    const [homePage, ...pages] = PAGE_NAVIGATIONS

    const generateClassNames: NavLinkProps['className'] = ({ isActive }) => {
        return combineClassNames(styles.link, isActive ? styles.active : undefined)
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to={homePage.path} title={homePage.name}>
                    <img src={Logo} />
                </NavLink>
            </div>
            <div className={styles.navbar}>
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
            </div>
        </div>
    )
}