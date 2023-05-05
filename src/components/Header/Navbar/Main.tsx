import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC, useEffect, useMemo, useState } from 'react';
import { LinkList } from './LinkList';
import { useDispatch } from 'react-redux';
import { setAppearanceOptions } from 'store/appearance/actionCreators';
import { APP_PAGES } from 'helpers/constants/pages';
import { useSelector } from 'react-redux';
import { selectActivePage } from 'store/appearance/selectors';
import { combineClassNames } from 'helpers/functions/commons';
import { useOrderCount } from 'hooks/useOrderCount';
import styles from './styles.module.scss';
import { Search } from 'components/Search/Main';

export const Navbar: FC = () => {

    const dispatch = useDispatch()
    const activePage = useSelector(selectActivePage)
    const isHomePage = useMemo(() => activePage === APP_PAGES.home, [activePage])
    const count = useOrderCount()
    
    const handleClick = () => {
        dispatch(setAppearanceOptions({activePage: APP_PAGES.order}))
    }

    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if(!count) return;
        setIsAnimating(true)
        const tm = setTimeout(() => {
            setIsAnimating(false)
        }, 2000)
        return () => clearTimeout(tm)
    }, [count])

    return (
        <div className={combineClassNames(styles.navbar, isHomePage ? styles.home: styles.order)}>
            {
                isHomePage && (
                    <>
                        <LinkList />
                        <Search />
                    </>
                )
            }
            <div className={styles.link} onClick={handleClick}>
                <div className={combineClassNames(styles.orderIcon, isAnimating ? styles.animating : undefined)}>
                    <ShoppingCartIcon fontSize={isHomePage ? 'medium' : 'large'} />
                    {
                        !!count &&
                        <div className={styles.badge}>
                            {count}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}