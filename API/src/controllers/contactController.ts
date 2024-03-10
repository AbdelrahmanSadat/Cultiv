import {Request, Response} from "express";
import {db} from "../../lib/db";

export const createContact = (req: Request, res: Response) => {
  res.status(201).send({ data: req.body });
};

export const getContacts = (req: Request, res: Response) => {
  res.status(200).send({ data: [] });
};

export const getContact = (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send({ data: { id } });
};

export const updateContact = (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send({ data: { id, ...req.body } });
};

export const deleteContact = (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send({ data: { id } });
};

export default {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
}

