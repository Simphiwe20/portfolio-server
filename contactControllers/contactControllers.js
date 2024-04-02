const contact = require('../contactsModel/contacts')
const nodemailer = require('nodemailer')



const sendFeedback = (req) => {
    console.log(req.body)
    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, //2525 (specific port)
        secureConnection: true, //true or false
        auth: {
            user: 'gsimphiwe212@gmail.com',
            pass: 'kkdvatjekgzlwrvr'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `${req.body.email}`,
        subject: 'Comment Feedback',
        text: `Hey ${req.body.fullName}, Thank you for reaching out. Your comment was received.`
    }

    mailTransporter.sendMail(details, (err) => {
        console.log(details)
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}



const sendComment = (req) => {
    console.log(req.body)
    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, //2525 (specific port)
        secureConnection: true, //true or false
        auth: {
            user: 'gsimphiwe212@gmail.com',
            pass: 'kkdvatjekgzlwrvr'
        }
    })

    let details = {
        from: 'gsimphiwe212@gmail.com',
        to: `gsimphiwe212@gmail.com`,
        subject: 'Website comment',
        text: `Hey ${req.body.fullName} has send a comment on your website. here is it ${JSON.stringify(req.body)} `
    }

    mailTransporter.sendMail(details, (err) => {
        console.log(details)
        if (err) {
            console.log('It has an error', err)
        } else {
            console.log('Messege send successfully')
        }
    })
}

module.exports = {
    storeComment: async (req, res) => {
        try {
            let payload = { ...req.body }
            let newComment = contact(payload)
            console.log(newComment)
            let result = await newComment.save()
            console.log(result)
            sendFeedback(req)
            sendComment(req)
            res.status(200).send(result)
        } catch (err) {
            console.log(err)
            res.status(500).send({ Error: 'Please use my contact details below. The seems to be an issue with my server' })
        }
    }
}