import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { PAGE_SECTIONS } from 'helpers/constants/pages';

import { Badge } from "./Badge";
import { LinkList } from './LinkList';
import styles from './styles.module.scss';

export const DesktopNavbar: FC = () => {

    return (
        <div className={styles.desktopNavbar}>
            <LinkList />
            <NavLink to='order' className={styles.link}>
                <ShoppingCartIcon fontSize='medium' />
                <Badge />
            </NavLink>
        </div>
    )
}