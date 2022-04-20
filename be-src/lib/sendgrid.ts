import * as sgMail from "@sendgrid/mail";

export async function sendEmailToUser(userEmail) {

    await sgMail.setApiKey(process.env.API_KEY_SENDGRIND);
    const msg = {
        to: userEmail,
        from: "alvaro695547@gmail.com",
        subject: ``,
        text: ``,
        html: ``,
    }
    const enviarMail = await sgMail.send(msg)
    .then(() => {
        console.log("Email enviado! :D");
        return true;
    });
}