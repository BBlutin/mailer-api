import { Router } from "express";
import { MailService } from "~/resources/mail.service";
import { BadRequestException, NotFoundException } from "~/utils/exceptions";

const MailController = Router();

const service = new MailService();

MailController.post("/welcome", async (req, res) => {
  if (!req.body.to || !req.body.name) {
    throw new BadRequestException("Il manque des arguments");
  }

  const mail = await service.sendWelcome(req.body.to, req.body.name);

  if (!mail.sended) {
    throw new NotFoundException("Envoi échoué");
  }

  return res.status(200).json(mail);
});

export { MailController };
