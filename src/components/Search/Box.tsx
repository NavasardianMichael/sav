import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectProducts } from "store/products/selectors";

import styles from './styles.module.scss';

type T_Props = {
    opened: boolean
    closeSearchModal: () => void
}

export const Box: FC<T_Props> = ({ opened, closeSearchModal }) => {
    
    const products = useSelector(selectProducts)
    const [ query, setQuery ] = useState('')

    const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.stopPropagation()
        setQuery(e.target.value)
    }

    const handleProductClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.stopPropagation()
        closeSearchModal()
    }

    useEffect(() => {
        if(opened) return;
        setQuery('')
    }, [opened])

    return (
        <div className={styles.searchBox}>
            <input 
                value={query}
                className={styles.queryInput}
                onChange={handleQueryChange}
                placeholder='Поиск по товарам'
            />
            <button className={styles.closeModalBtn} onClick={closeSearchModal}>
                <CloseOutlinedIcon />
            </button>
            <div className={styles.suggestions}>
                {
                    products.allIds.map(id => {
                        const product = products.byId[id]
                        if(!query || product.name.indexOf(query) === -1) return null;
                        return (
                            <a 
                                key={product.id}
                                href={`#${product.id}`}
                                className={styles.suggestion}
                                onClick={handleProductClick}
                            >
                                {product.name}
                                <ArrowForwardIosIcon fontSize='small' />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}