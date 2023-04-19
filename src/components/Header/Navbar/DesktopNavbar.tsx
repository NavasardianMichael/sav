import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { PAGE_NAVIGATIONS } from 'helpers/constants/pages';
import { combineClassNames } from 'helpers/functions/commons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "./Badge";
import styles from './styles.module.css';

export const DesktopNavbar: FC = () => {

    const [ _, ...pages ] = PAGE_NAVIGATIONS

    const generateClassNames: NavLinkProps['className'] = ({ isActive }) => {
        return combineClassNames(styles.link, isActive ? styles.active : undefined)
    }

    return (
        <div className={styles.desktopNavbar}>
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
            <NavLink to='order' className={generateClassNames}>
                <ShoppingCartIcon fontSize='large' />
                <Badge />
            </NavLink>
        </div>
    )
}