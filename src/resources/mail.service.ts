require("dotenv").config();
import transporter from "~/utils/mailer";
import { WelcomeEmail, WelcomeSubject } from "~~/templates/welcome";
import { Mail } from "~~/types/mail";

export class MailService {
  async sendMail(
    to: string,
    user: string,
    appName: string,
    appUrl: string,
    logoUrl: string,
    template: string
  ) {
    let mailContext = {
      template: WelcomeEmail,
      subject: WelcomeSubject,
    };

    if (template === "WELCOME") {
      mailContext.template = WelcomeEmail;
      mailContext.subject = WelcomeSubject;
    }

    if (template === "CONNECTION") {
    }

    let mail = await transporter.sendMail({
      from: `"Mailer Api 👻" <${process.env.MAIL_ACCOUNT}>`,
      to: to,
      subject: mailContext.subject(appName),
      html: mailContext.template(appName, logoUrl, user, appUrl),
    });

    let result: Mail;

    if (mail.messageId) {
      result = { sended: true, messageInfo: mail };
    } else {
      result = { sended: false, messageInfo: null };
    }

    return result;
  }
}
