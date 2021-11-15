import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const EMAIL_USER = process.env['EMAIL_USER'];
const EMAIL_PASS = process.env['EMAIL_PASS'];
const EMAIL_RECIPIENT = process.env['EMAIL_RECIPIENT'];

export async function post(request) {

    const data = request.body;

    if (!data.message || !data.contact) return {body: {message: 'error'}};

    const mailObj = {
        from: String(EMAIL_USER),
        recipients: [String(EMAIL_RECIPIENT)],
        subject: 'New message on ZenTown',
        message: `${data.contact}, ${data.message}`
    };
   
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
                user: String(EMAIL_USER),
                pass: String(EMAIL_PASS)
            }
        });

        let mailStatus = await transporter.sendMail({
            from: mailObj.from,
            to: mailObj.recipients,
            subject: mailObj.subject,
            text: mailObj.message
        });
        return {body: {message: 'ok'}};

    } catch (error) {
        
        return{body: {message: 'error'}};
    }
};