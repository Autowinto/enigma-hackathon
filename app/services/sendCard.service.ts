'use server'
/* eslint node/prefer-global/process: [error] */
// Download the Node helper library from www.twilio.com/docs/libraries/node#installation
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
// To set up environmental variables, see http://twil.io/secure
import * as sg from '@sendgrid/mail'

export async function sendCard(to: string, card: string, title: string): void {
  const key = process.env.API_KEY || ''

  sg.setApiKey(key)

  const msg = {
    to,
    from: 'fra.julemanden.ho.ho.ho@gmail.com',
    subject: title,
    text: card,
    html:
    `<pre>${card}</pre>`,
  }
  sg.send(msg).then(() => {
    console.log('Email sent')
  }).catch((error) => {
    console.error(error)
  })
}
