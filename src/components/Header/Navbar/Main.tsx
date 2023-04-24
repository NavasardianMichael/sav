import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from './Badge'
import { LinkList } from './LinkList';
import styles from './styles.module.scss';

export const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <LinkList />
            <NavLink to='order' className={styles.link}>
                <ShoppingCartIcon fontSize='medium' />
                <Badge />
            </NavLink>
        </div>
    )
}