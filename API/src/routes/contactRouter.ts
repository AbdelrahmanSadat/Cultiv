import express from "express";
import contactController from "../controllers/contactController";
import { validate } from "../../middleware/validate";

export const contactRouter = express.Router();

contactRouter.get("contacts",  contactController.getContacts);

contactRouter.post("contacts", contactController.createContact);

contactRouter.get("contacts/:id", contactController.getContact);

contactRouter.delete("contacts/:id", contactController.deleteContact);

contactRouter.patch("contacts/:id", contactController.updateContact);

