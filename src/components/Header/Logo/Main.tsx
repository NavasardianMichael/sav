import LogoSvg from 'assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const Logo = () => {

    return (
        <div className={styles.logo}>
            <NavLink to='/'>
                <img src={LogoSvg} alt='Logo' />
            </NavLink>
        </div>
    )
}