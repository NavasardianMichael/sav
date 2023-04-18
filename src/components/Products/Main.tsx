import { FC } from "react"
import { useSelector } from "react-redux"
import { selectCategories } from "store/categories/selectors"
import { selectProducts } from "store/products/selectors"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styles from './styles.module.css'
import { useOrderLocalStorage } from "hooks/useOrderLocalStorage";
import { useDispatch } from "react-redux";
import { setOrderItems } from "store/order/actionCreators";

export const Products: FC = () => {

    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const { addOrder } = useOrderLocalStorage()

    const handleClick = () => {
        const order = {
            id: '1',
            productId: '1',
            quantity: 100
        }
        dispatch(setOrderItems([order]))
        addOrder(order)
    }

    return (
        <div className={styles.products}>
            {
                products.allIds.map(id => {
                    const product = products.byId[id]
                    return (
                        <div key={id} className={styles.card}>
                            <div className={styles.upperSection}>
                                <img src={product.imageUrl} />
                            </div>
                            <div className={styles.lowerSection}>
                                <p>{product.name}</p>
                                <p>{product.price} руб.</p>
                                <button onClick={handleClick}>
                                    <BookmarkAddIcon />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}