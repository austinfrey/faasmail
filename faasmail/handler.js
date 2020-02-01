"use strict"
const {createTransport} = require('nodemailer')

const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

module.exports = async(context, callback) => {
    const email = JSON.parse(context)
    let info = await transport.sendMail(email)
    return info
}
