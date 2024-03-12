import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { db } from "../../lib/db";

export const register = asyncHandler(async (req, res) => {
  //Destructuing the inputs from req.body
  const { email, password } = req.body;

  //Verifying the email address inputed is not used already
  const verifyEmail = await db.user.findUnique({ where: { email: email } });
  try {
    if (verifyEmail) {
      res.status(403).json({
        message: "Email already used",
      });
      return;
    } else {
      //using bcrypt to hash the password sent from the user
      bcrypt
        .hash(password, 10)
        .then(async (hash) => {
          //Registering the user
          const user = await db.user.create({
            data: { email: email, passwordHash: hash },
          });
          res.status(201).json({
            success: true,
            userId: user.id,
          });
          return;
        })
        .catch((error) => {
          res.status(500).json({ error });
          return;
        });
    }
  } catch (error: any) {
    res.status(412).send({
      success: false,
      message: error.message ?? error,
    });
    return;
  }
});

export const login = asyncHandler(async (req, res) => {
  //Destructing the inputs from req.body
  const { email, password } = req.body;

  //verifying that the user with the email exist or not
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    res.status(401).json({ message: "Authentication Failed" });
    return;
  }

  return bcrypt
    .compare(password, user.passwordHash)

    .then((response) => {
      if (!response) {
        res.status(401).json({
          message: "Authentication Failed",
        });
        return;
      } else {
        let jwtToken = jwt.sign(
          {
            email: user.email,
            id: user.id,
          },
          //Signign the token with the JWT_SECRET in the .env
          process.env.JWT_SECRET!,
          {
            expiresIn: "24h",
          }
        );
        res.status(200).json({ accessToken: jwtToken, id: user.id });
        return;
      }
    })
    .catch((err) => {
      res.status(401).json({ messgae: err.message, success: false });
      return;
    });
});

export default {
    login,
    register
}