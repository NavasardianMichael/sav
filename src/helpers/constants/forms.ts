export const CONTACT_FORM_FIELD_NAMES = {
    name: 'contact-form-name',
    phone: 'contact-form-phone',
    email: 'contact-form-email',
    content: 'contact-form-content',
} as const

export const CONTACT_FORM_TEMPLATE = [
    {
        id: 1,
        name: CONTACT_FORM_FIELD_NAMES.name,
        label: 'Имя',
        isLongFormat: false
    },
    {
        id: 2,
        name: CONTACT_FORM_FIELD_NAMES.phone,
        label: 'Телефон',
        isLongFormat: false
    },
    {
        id: 3,
        name: CONTACT_FORM_FIELD_NAMES.email,
        label: 'Эл. почта',
        isLongFormat: false
    },
    {
        id: 4,
        name: CONTACT_FORM_FIELD_NAMES.content,
        label: 'Примечания',
        isLongFormat: true
    },
] as const

export const EMAIL_SUBJECTS = {
    contact: 'Сообщение в службу поддержки',
    order: 'Новый Заказ!'
}