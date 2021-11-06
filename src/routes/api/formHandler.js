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

    /* try {
        console.log('stop1');
        let transporter = nodemailer.createTransport({
            service: 'SendinBlue',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        console.log('transporter', transporter);

        console.log('stop2')

        await transporter.sendMail({
            from: EMAIL_USER,
            to: [EMAIL_USER],
            subject: 'Nouveau message sur ZenTown!',
            text: `Nouveau message de la part de ${data.contact}
            
            ${data.message}`
        });

        console.log('stop3')
    }

    catch(error) {
        console.log('error', error);
        return {body: {message: `error: ${error}`}};
    }

    return {body: {message: 'ok'}}; */