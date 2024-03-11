import { Request, Response } from "express";
import { db } from "../../lib/db";
import { Contact } from "@prisma/client";

export const createContact = async (req: CreateContactRequest, res: Response) => {
  try{
    const contact = await db.contact.create({ data: {...req.body, createdBy: "1"} })
    res.status(201).send({ contact });
  }catch(e){
    // todo?: if invalid or non-unique (check prisma errors), return 400 or smth
    res.status(500).send({ error: e });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await db.contact.findMany();
  res.status(200).send({ contacts });
};

export const getContact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = await db.contact.findFirst({ where: { id } });
  res.status(200).send({ contact });
};

export const updateContact = (req: UpdateContactRequest, res: Response) => {
  const id = req.params.id;
  const contact = db.contact.update({ where: { id }, data: req.body });
  res.status(200).send({ contact });
};

export const deleteContact = (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = db.contact.delete({ where: { id } });
  res.status(200).send({ contact });
};

export default {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};

interface CreateContactRequest extends Request {
  body: Contact;
}

interface UpdateContactRequest extends Request {
  body: Partial<Contact>;
}
