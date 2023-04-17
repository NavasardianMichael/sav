import { FC } from "react";
import DoneIcon from '@mui/icons-material/Done';
import styles from './styles.module.css'

export const SuccessMessage: FC = () => {
    return (
        <div className={styles.successBlock}>
            <DoneIcon />
            Отправлено!
        </div>
    )
}