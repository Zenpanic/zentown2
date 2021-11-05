import nodemailer from 'nodemailer';

const EMAIL_USER = import.meta.env.VITE_EMAIL_USER;
const EMAIL_PASS = import.meta.env.VITE_EMAIL_PASS;

export async function post(request) {
    const data = request.body;

    if (!data.message || !data.contact) return {body: {message: 'error'}};

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        const emailSent = await transporter.sendMail({
            from: EMAIL_USER,
            to: EMAIL_USER,
            subject: 'Nouveau message sur ZenTown!',
            text: `Nouveau message de la part de ${data.contact}
            
            ${data.message}`
        });

        console.log(emailSent);
    }

    catch(error) {
        return {body: {message: `error: ${error}`}};
    }

    return {body: {message: 'ok'}};
}