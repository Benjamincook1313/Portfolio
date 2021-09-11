require('dotenv').config()
const { PASSWORD, EMAIL, MYEMAIL } = process.env
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
})

module.exports = {
  sendEmail: (req, res) => {
    const { name, email, message } = req.body
    let mailOption = {
      from: EMAIL,
      to: MYEMAIL,
      subject: `message from ${name, email} on your portfolio`,
      text: message
    }

    transporter.sendMail(mailOption, function(err) {
      if(err) {
        console.log('Error sending email')
      }else{
        console.log('Email sent!!!')
      }
    })
    res.status(200).send(res)
  },
}