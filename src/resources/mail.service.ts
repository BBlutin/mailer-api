require("dotenv").config();
import transporter from "~/utils/mailer";
import { Mail } from "~~/types/mail";

export class MailService {
  async sendWelcome(to: string, name: string) {
    let welcome = await transporter.sendMail({
      from: `"Mailer Api 👻" <${process.env.MAIL_ACCOUNT}>`,
      to: to,
      subject: "Hello ✔",
      text: `Hello ${name} !`,
      html: `<b>Hello ${name} !</b>`,
    });

    let result: Mail;

    if (welcome.messageId) {
      result = { sended: true, messageInfo: welcome };
    } else {
      result = { sended: false, messageInfo: null };
    }

    return result;
  }
}
