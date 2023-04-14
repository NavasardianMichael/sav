import { FC } from "react";
import {ReactComponent as LoaderSvg} from 'assets/images/loader.svg'
import styles from './styles.module.css';
import { useSelector } from "react-redux";
import { selectAppearanceOptions } from "store/appearance/selectors";

export const Loader: FC = () => {

    const { isFetchingMainData } = useSelector(selectAppearanceOptions)

    if(!isFetchingMainData) return null;

    return (
        <div className={styles.loader}>
            <div className={styles.overlay} />
            <div className={styles.svg}>
                <LoaderSvg />
            </div>
        </div>
    )
}