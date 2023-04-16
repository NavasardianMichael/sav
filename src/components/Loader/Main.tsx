import { FC } from "react";
import { ReactComponent as LoaderSvg } from 'assets/images/loader.svg'
import { useSelector } from "react-redux";
import styles from './styles.module.css';
import { combineClassNames } from "helpers/functions/commons";
import { T_AppearanceState } from "store/appearance/types";
import { RootState } from "index";

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