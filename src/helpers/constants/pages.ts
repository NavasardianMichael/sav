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
            name: 'Обратная свазь',
            hideOnMobile: false
        },
        testimonials:  {
            id: 'testimonials',
            name: 'Отзывы',
            hideOnMobile: false
        },
    },
    // <a href="https://drive.google.com/uc?export=download&id=1HkGV_e_ceCwFV8dyMcl0WP0xz7y2VLJq" download>Download</a>
    allIds: ['about', 'orderInstructions', 'contact', 'testimonials']
} as const

export const APP_PAGES = {
    home: 'home',
    order: 'order'
} as const