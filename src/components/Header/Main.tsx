import { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from 'assets/images/logo.svg';
import { PAGE_NAVIGATIONS } from "helpers/constants/pages";

import { Navbar } from "./Navbar/Main";
import styles from './styles.module.css';

export const Header: FC = () => {

    const [ homePage ] = PAGE_NAVIGATIONS

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to={homePage.path} title={homePage.name}>
                    <img src={Logo} />
                </NavLink>
            </div>
            <Navbar>
                <Navbar.Desktop />
                <Navbar.Mobile />
            </Navbar>
        </div>
    )
}