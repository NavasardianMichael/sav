import EmailIcon from '@mui/icons-material/Email';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const CONTACT_ITEMS = {
    withText: [
        {
            id: 1,
            Icon: EmailIcon,
            title: 'Эл. почта',
            prefix: 'mailto:',
            href: 'navasardianmichael@gmail.com',
            text: 'navasardianmichael@gmail.com'
        },
        {
            id: 2,
            Icon: CallRoundedIcon,
            title: 'Телефон',
            prefix: 'tel:',
            href: '+37498751615',
            text: '+374 98 75 16 15'
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
            href: 'https://www.facebook.com/ProGoTech82'
        },
        {
            id: 5,
            Icon: TelegramIcon,
            title: 'Telegram',
            prefix: '',
            href: 'https://www.facebook.com/ProGoTech82'
        },
        {
            id: 6,
            Icon: WhatsAppIcon,
            title: 'WhatsApp',
            prefix: '',
            href: 'https://www.facebook.com/ProGoTech82'
        },
    ]
}