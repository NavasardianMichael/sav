import { FC, useCallback, useEffect, useRef, useState } from "react";
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from './styles.module.scss';
import { Form } from "./Form";
import { Loader } from "components/Loader/Main";

export const Chat: FC = () => {

    const [opened, setOpenedStatus] = useState(false)
    const Icon = opened ? CloseRoundedIcon : QuestionAnswerRoundedIcon
    const chatNodeRef = useRef<HTMLDivElement>(null)

    const toggleChat = useCallback(() => setOpenedStatus(prev => !prev), [])
    
    const handleChatButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenedStatus(prev => !prev)
    } 

    useEffect(() => {
        const handleClick = (e: any) => {
            e.stopPropagation();
            if(!opened) return;
            if(!chatNodeRef?.current?.contains(e.target as Node)) toggleChat()
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [chatNodeRef, opened])

    return (
        <div ref={chatNodeRef} className={styles.chat}>
            <button className={styles.btn} onClick={handleChatButtonClick}>
                <Icon className={styles.icon} />
            </button>
            {
                opened &&
                <div className={styles.content}>
                    <p>Добро пожаловать на наш сайт, если вам нужна помощь или есть какие-либо вопросы, вы можете написать</p>
                    <Form />
                    <Loader statusKey='isPendingContactEmail' />
                </div>
            }
        </div>
    )
}