export const HOME_PAGE_SECTIONS = {
    byId: {
        about: {
            id: 'about',
            name: 'О нас',
        },
        contact: {
            id: 'contact',
            name: 'Обратная свазь',
        },
        testimonials:  {
            id: 'testimonials',
            name: 'Отзывы',
        },
    },
    allIds: ['about', 'contact', 'testimonials']
} as const

export const APP_PAGES = {
    home: 'home',
    order: 'order'
} as const