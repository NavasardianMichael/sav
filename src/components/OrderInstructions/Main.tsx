import { FC } from 'react';
import { HOME_PAGE_SECTIONS } from 'helpers/constants/pages';
import { Section } from 'components/Section/Main';
import styles from './styles.module.scss';

export const OrderInstructions: FC = () => {
    return (
        <Section id={HOME_PAGE_SECTIONS.byId.orderInstructions.id} className={styles.orderInstructions}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, autem! Reiciendis debitis velit, suscipit laudantium at ex alias ea, magnam veritatis aut aliquid, enim delectus consequuntur facilis eveniet! Accusamus iure impedit ab. Doloremque suscipit consectetur et. Dignissimos magni, minus temporibus debitis possimus doloremque dolor dicta velit impedit architecto, ipsum est nesciunt! Natus labore qui ratione exercitationem eaque ad suscipit quibusdam reprehenderit quidem! Recusandae illo eaque nisi iste beatae cumque dicta dolore quibusdam eveniet quaerat, sunt maxime suscipit? Aut expedita temporibus architecto rem quidem blanditiis mollitia exercitationem. In accusamus sint doloribus harum ea, assumenda, suscipit praesentium, nisi hic ipsam quasi iure?</p>
        </Section>
    )
}