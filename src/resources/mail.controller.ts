import { Router } from "express";
import { MailService } from "~/resources/mail.service";
import { BadRequestException, NotFoundException } from "~/utils/exceptions";

const MailController = Router();

const service = new MailService();

MailController.post("/send", async (req, res) => {
  if (!req.body.to) {
    throw new BadRequestException("Il manque des arguments");
  }

  const mail = await service.sendMail(
    req.body.to,
    req.body.user,
    req.body.appName,
    req.body.appUrl,
    req.body.logoUrl,
    req.body.template
  );

  if (!mail.sended) {
    throw new NotFoundException("Envoi échoué");
  }

  return res.status(200).json(mail);
});

export { MailController };
