import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC } from 'react';
import { Badge } from './Badge'
import { LinkList } from './LinkList';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setAppearanceOptions } from 'store/appearance/actionCreators';
import { APP_PAGES } from 'helpers/constants/pages';
import { useSelector } from 'react-redux';
import { selectActivePage } from 'store/appearance/selectors';
import { combineClassNames } from 'helpers/functions/commons';

export const Navbar: FC = () => {

    const dispatch = useDispatch()
    const activePage = useSelector(selectActivePage)
    
    const handleClick = () => {
        dispatch(setAppearanceOptions({activePage: APP_PAGES.order}))
    }

    return (
        <div className={combineClassNames(styles.navbar, activePage === APP_PAGES.home ? styles.home: styles.order)}>
            {activePage === APP_PAGES.home && <LinkList />}
            <div className={styles.link} onClick={handleClick}>
                <div className={styles.orderIcon}>
                    <ShoppingCartIcon fontSize='medium' />
                    <Badge />
                </div>
            </div>
        </div>
    )
}