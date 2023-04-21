import { FC } from "react";
import { Categories } from "./Categories/Main";
import { Logo } from "./Logo/Main";
import { Navbar } from "./Navbar/Main";
import styles from './styles.module.css';

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Navbar />
            <Categories />
        </div>
    )
}