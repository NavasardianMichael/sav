import LogoIcon from 'assets/images/logo-sav-medical.jpeg';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setAppearanceOptions } from 'store/appearance/actionCreators';
import { APP_PAGES } from 'helpers/constants/pages';

export const Logo = () => {
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(setAppearanceOptions({activePage: APP_PAGES.home}))
    }
    
    return (
        <div className={styles.logo}>
            <img src={LogoIcon} alt='Logo' onClick={handleClick}/>
        </div>
    )
}