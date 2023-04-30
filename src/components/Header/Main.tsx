import { FC } from "react";
import { Categories } from "./Categories/Main";
import { Logo } from "./Logo/Main";
import { Navbar } from "./Navbar/Main";
import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { selectActivePage } from "store/appearance/selectors";
import { APP_PAGES } from "helpers/constants/pages";

export const Header: FC = () => {

    const activePage = useSelector(selectActivePage)

    return (
        <div className={styles.header}>
            <Logo />
            <Navbar />
            {activePage === APP_PAGES.home && <Categories />}
        </div>
    )
}