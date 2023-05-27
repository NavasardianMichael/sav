import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { ReactComponent as VKIcon } from 'assets/images/vk-logo.svg';

export const CONTACT_ITEMS = {
    withText: [
        {
            id: 1,
            Icon: EmailIcon,
            title: 'Эл. почта',
            prefix: 'mailto:',
            href: 'sav.med@gmail.com',
            text: 'sav.med@gmail.com'
        },
        {
            id: 2,
            Icon: CallRoundedIcon,
            title: 'Телефон',
            prefix: 'tel:',
            href: '+79690223407',
            text: '+7 969 022-34-07'
        },
    ],
    onlyIcons: [
        {
            id: 3,
            Icon: FacebookIcon,
            title: 'Facebook',
            prefix: '',
            href: 'https://www.facebook.com/ProGoTech82'
        },
        {
            id: 4,
            Icon: InstagramIcon,
            title: 'Instagram',
            prefix: '',
            href: 'https://www.instagram.com/asprofgroup_/'
        },
        {
            id: 5,
            Icon: TelegramIcon,
            title: 'Telegram',
            prefix: '',
            href: 'https://t.me/+79855724547'
        },
        {
            id: 6,
            Icon: WhatsAppIcon,
            title: 'WhatsApp',
            prefix: '',
            href: 'https://wa.me/+79855724547'
        },
        {
            id: 7,
            Icon: VKIcon,
            title: 'VK',
            prefix: '',
            href: 'https://m.vk.com/id748613178',
            isIconCustom: true
        },
    ]
}