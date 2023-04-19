import { FC } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';
import styles from './styles.module.css';

type T_Props = {
    children: JSX.Element | JSX.Element[]
}

type T_CompoundComposition = {
    Desktop: FC
    Mobile: FC
}

export const Navbar: FC<T_Props> & T_CompoundComposition = ({ children }) => {
    return (
        <div className={styles.navbar}>
            {children}
        </div>
    )
}

Navbar.Desktop = DesktopNavbar
Navbar.Mobile = MobileNavbar