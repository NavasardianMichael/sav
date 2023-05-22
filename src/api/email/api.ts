type T_Args = {
  subject: string, 
  body: string
}

export const sendEmail = async ({subject, body}: T_Args) => {
    const response = await Email.send({
      SecureToken : process.env.REACT_APP_EMAIL_TOKEN as string,
      From : process.env.REACT_APP_EMAIL_ACCOUNT as string,
      To : 'sav.med@gmail.com',
      Subject : subject,
      Body : body
    })
    return response 
}