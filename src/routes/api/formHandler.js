import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const EMAIL_USER = process.env['EMAIL_USER'];
const EMAIL_PASS = process.env['EMAIL_PASS'];

export async function post(request) {
    const data = request.body;

    console.log('ids', EMAIL_PASS, EMAIL_USER)

    if (!data.message || !data.contact) return {body: {message: 'error'}};

    try {
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
            to: EMAIL_USER,
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

    return {body: {message: 'ok'}};
}