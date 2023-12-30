import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, "123", { expiresIn: "1h" });
};

export const verifyToken = (token: string): object => {
  return jwt.verify(token, "123") as object;
};