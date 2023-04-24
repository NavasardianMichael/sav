import { Section } from 'components/Section/Main';
import { CONTACT_ITEMS } from 'helpers/constants/contacts';
import { PAGE_SECTIONS } from 'helpers/constants/pages';
import { FC } from 'react';
import styles from './styles.module.scss';
export const Contact: FC = () => {
    return (
        <Section id={PAGE_SECTIONS.byId.contact.id}>
            <div className={styles.about}>
                <div className={styles.initialInfo}>
                    <p>С понедельника по пятницу: 09:00 - 18:00</p>
                    <p>Суббота: 09:00-13:00</p>
                    <a href='https://www.google.com/maps/place/SAV+holding/@40.2413201,44.5751578,15z/data=!4m6!3m5!1s0x406aa3d2eca95fef:0xdf89768077366d14!8m2!3d40.2413201!4d44.5751578!16s%2Fg%2F11k9s3_7lj' target='_blank'>Адрес: Котайк, Ариндж, 1-я улица, Ереван</a>
                </div>
                <div className={styles.linkItems}>
                    {
                        CONTACT_ITEMS.withText.map(({id, title, href, prefix, text}) => {
                            return (
                                    <a key={id} target='_blank' title={title} href={prefix + href}>
                                        {title}: {text}
                                    </a>
                            )
                        })
                    }
                </div>
                <div className={styles.iconItems}>
                    В соцсетях: 
                    {
                        CONTACT_ITEMS.onlyIcons.map(({id, title, href, Icon, prefix}) => {
                            return (
                                    <a key={id} target='_blank' title={title} href={prefix + href}>
                                        <Icon fontSize='medium' />
                                    </a>
                            )
                        })
                    }
                </div>
            </div>
        </Section>
    )
}