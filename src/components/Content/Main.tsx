import { Loader } from "components/Loader/Main";
import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Home } from "pages/Home";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { selectAppearanceOptions } from "store/appearance/selectors";
import styles from './styles.module.css';

export const Content: FC = () => {
    const { isFetchingMainData } = useSelector(selectAppearanceOptions)

    if(isFetchingMainData) return <Loader />

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