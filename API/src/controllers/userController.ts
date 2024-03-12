import {Request, Response} from "express";
import {db} from "../../lib/db";

export const createUser = (req: Request, res: Response) => {
  res.status(201).send({ data: req.body });
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).send({ data: [] });
};

export const getUser = (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send({ data: { id } });
};

export const updateUser = (req: Request, res: Response) => {
  const id = req.params.id;
  res.status(200).send({ data: { id, ...req.body } });
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = await db.user.delete({ where: { id } });
  res.status(200).send({ data: { id } });
};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}

