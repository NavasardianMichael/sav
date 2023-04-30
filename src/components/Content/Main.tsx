import { Footer } from "components/Footer/Main";
import { APP_PAGES } from "helpers/constants/pages";
import { getOrderLocalStorage } from "helpers/functions/order";
import { Home } from "pages/Home";
import { Order } from "pages/Order";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderItems } from "store/order/actionCreators";
import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { selectActivePage } from "store/appearance/selectors";
import { combineClassNames } from "helpers/functions/commons";

export const Content: FC = () => {

    const dispatch = useDispatch()
    const { list } = getOrderLocalStorage()
    const activePage = useSelector(selectActivePage)

    useEffect(() => {
        if(!list?.length) return;
        
        dispatch(setOrderItems(list))
    }, [dispatch])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }, [activePage])

    return (
        <div className={combineClassNames(styles.content, activePage === APP_PAGES.home ? styles.home: styles.order)}>
            <div className={styles.currentPageContent}>
                {
                    activePage === APP_PAGES.home ?
                    <Home /> :
                    <Order />
                }
            </div>
            <Footer />
        </div>
    )
}