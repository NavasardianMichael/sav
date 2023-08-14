export const HOME_PAGE_SECTIONS = {
    byId: {
        about: {
            id: 'about',
            name: 'О нас',
            hideOnMobile: false
        },
        orderInstructions: {
            id: 'orderInstructions',
            name: 'Как заказать?',
            hideOnMobile: true
        },
        contact: {
            id: 'contact',
            name: 'Обратная связь',
            hideOnMobile: false
        },
        testimonials:  {
            id: 'testimonials',
            name: 'Отзывы',
            hideOnMobile: false
        },
    },
    allIds: ['about', 'orderInstructions', 'contact', 'testimonials']
} as const

export const APP_PAGES = {
    home: 'home',
    order: 'order'
} as const