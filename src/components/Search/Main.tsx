import { FC, useState } from 'react';
import styles from './styles.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Portal } from 'components/Portal/Main';
import { Box } from './Box';

export const Search: FC = () => {

    const [ isModalShown, setIsModalShown ] = useState(false)


    const showSearchModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        setIsModalShown(true)
    }
    
    const closeSearchModal = () => {
        setIsModalShown(false)
    }

    return (
        <div className={styles.search}>
            <button className={styles.searchBtn} onClick={showSearchModal}>
                <SearchOutlinedIcon />
            </button>
            <Portal 
                className={styles.searchModal} 
                opened={isModalShown}
                setOpenedStatus={setIsModalShown} 
            >
                <Box opened={isModalShown} closeSearchModal={closeSearchModal} />
            </Portal>
        </div>
    )
}