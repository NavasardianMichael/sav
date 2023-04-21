import { PAGE_NAVIGATIONS } from 'helpers/constants/pages'
import { NavLink } from 'react-router-dom'
import LogoSvg from 'assets/images/logo.svg';
import styles from './styles.module.scss'

export const Logo = () => {

    const [ homePage ] = PAGE_NAVIGATIONS

    return (
        <div className={styles.logo}>
            <NavLink to={homePage.path} title={homePage.name}>
                <img src={LogoSvg} alt='Logo' />
            </NavLink>
        </div>
    )
}