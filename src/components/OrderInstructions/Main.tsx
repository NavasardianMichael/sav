import { FC } from 'react';
import { HOME_PAGE_SECTIONS } from 'helpers/constants/pages';
import { Section } from 'components/Section/Main';
import styles from './styles.module.scss';

export const OrderInstructions: FC = () => {
    return (
        <Section id={HOME_PAGE_SECTIONS.byId.orderInstructions.id} className={styles.orderInstructions}>
            <p>Для того, чтобы оформить заказ, добавьте необходимые товары в корзину и заполните форму обратной связи. В течение часа после оформления заказа с Вами свяжется менеджер для согласования индивидуальной скидки и дальнейшего оформления доставки.</p>
        </Section>
    )
}