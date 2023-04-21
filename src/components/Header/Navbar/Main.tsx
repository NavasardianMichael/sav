import { FC } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';
import styles from './styles.module.scss';

export const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}