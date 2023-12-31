import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, "123", { expiresIn: "1h" });
};

export const verifyToken = (token: string): object => {
  if (!token) throw Error("Token not found");
  return jwt.verify(token, "123") as object;
};