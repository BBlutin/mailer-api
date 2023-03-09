import SMTPTransport from "nodemailer/lib/smtp-transport";

export interface Mail {
  sended: boolean;
  messageInfo: SMTPTransport.SentMessageInfo | null;
}
