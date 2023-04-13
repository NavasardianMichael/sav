export const combineClassNames = (...classNames: (string | undefined)[]) => {
    if(!classNames.length) return undefined;
    return classNames.filter(className => !!className).join(' ')
}