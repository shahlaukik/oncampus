// Import packages
const Email = require("email-templates");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: process.env.google_admin_email,
        pass: process.env.google_app_password,
    },
});

const email = new Email({
    transport: transporter,
    preview: false,
    send: true,
});

async function SendOTPEmail({ to = "", subject = "", locals = {} }) {
    try {
        const response = await email.send({
            template: "OTP",
            message: {
                to: to,
                from: `oncampus <${process.env.google_admin_email}>`,
                subject: subject,
            },
            locals: locals,
        });

        return {
            response: "Email Sent Successfully",
            ok: true,
            data: response,
        };
    } catch (error) {
        return { response: "Server Error. Please try again Later", ok: false };
    }
}

exports.SendOTPEmail = SendOTPEmail;
