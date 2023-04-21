import { FC } from "react"
import { useSelector } from "react-redux"
import { selectCategories } from "store/categories/selectors"
import { selectProducts } from "store/products/selectors"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useDispatch } from "react-redux";
import { setOrderItems } from "store/order/actionCreators";
import { getOrderLocalStorage } from "helpers/functions/order";
import styles from './styles.module.css'
import { NavLink } from "react-router-dom";
import { selectSubCategories } from "store/subCategories/selectors";

export const Products: FC = () => {

    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const subCategories = useSelector(selectSubCategories)
    const { addOrder } = getOrderLocalStorage()
console.log({categories, subCategories});

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        e.preventDefault()
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
                        <NavLink to={`/product/${id}`} key={id} className={styles.card}>
                            <div className={styles.upperSection}>
                                <img src={product.imageUrl} />
                            </div>
                            <div className={styles.lowerSection}>
                                <p>{product.name}</p>
                                <button onClick={handleClick}>
                                    <BookmarkAddIcon />
                                </button>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}