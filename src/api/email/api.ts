export const sendEmail = async (form: string) => {
    const response = await Email.send({
      SecureToken : process.env.REACT_APP_EMAIL_TOKEN as string,
      From : process.env.REACT_APP_EMAIL_ACCOUNT as string,
      To : 'navasardianmichael2@gmail.com',
      Subject : "Project Submission Pending",
      Body : form
    })
    console.log('---EMAIL RESPONSE---') 
    console.log({response}) 
}