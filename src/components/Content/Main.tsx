import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Home } from "pages/Home";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import styles from './styles.module.css';

export const Content: FC = () => {

    return (
        <div className={styles.content}>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </div>
    )
}