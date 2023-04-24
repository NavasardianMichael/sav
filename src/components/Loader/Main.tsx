import { ReactComponent as LoaderSvg } from 'assets/images/loader.svg';
import { combineClassNames } from "helpers/functions/commons";
import { RootState } from "index";
import { FC } from "react";
import { useSelector } from "react-redux";
import { T_AppearanceState } from "store/appearance/types";
import styles from './styles.module.css';

type T_Props = {
    statusKey: keyof T_AppearanceState 
    allPage?: boolean
}

export const Loader: FC<T_Props> = ({allPage, statusKey}) => {

    const isPending = useSelector((state: RootState) => state.appearance[statusKey])

    if(!isPending) return null;

    return (
        <div className={combineClassNames(styles.loader, allPage ? styles.allPage : undefined)}>
            <div className={styles.overlay} />
            <div className={styles.svg}>
                <LoaderSvg />
            </div>
        </div>
    )
}