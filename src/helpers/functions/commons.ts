export const combineClassNames = (...classNames: (string | undefined)[]) => {
    if(!classNames.length) return undefined;
    return classNames.filter(className => !!className).join(' ')
}

export const validateEmail = (email: string): boolean => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const hasObjAnyKey = (obj: {[key: string]: any}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return true
  }
}

export const getDriveImageUrlById = (id: string) => {
  return `https://drive.google.com/uc?id=${id}`
}