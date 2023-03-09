import cors from "cors";
import express from "express";
import { config } from "~/config";
import { ExceptionsHandler } from "~/middlewares/exceptions.handler";
import { UnknownRoutesHandler } from "~/middlewares/unknownRoutes.handler";
import { MailController } from "./resources/mail.controller";

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors());

/**
 * On défini le controller à utiliser sur les routes
 */
app.use("/", MailController);

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all("*", UnknownRoutesHandler);

/**
 * Gestion des erreurs
 */
app.use(ExceptionsHandler);

/**
 * On demande à Express d’écouter les requêtes sur le port défini dans la config
 */
app.listen(config.API_PORT, () => console.log("Silence, ça tourne."));
