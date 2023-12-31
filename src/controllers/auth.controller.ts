import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { comparePassword } from "../utils/haspassword";
import { ErrorHandled } from "../utils/errorHandled";
import { generateToken, verifyToken } from "../utils/jwt";


export class AuthController {
  private userService: UserService = new UserService();
  login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const user = await this.userService.getOneByEmail(email);

      const checkPassword = comparePassword(password, user.password);

      const token = generateToken({ id: user.id, email: user.email });

      if (!checkPassword) throw ErrorHandled.errorBadRequest("Password incorrect");

      res.cookie("user", token, { maxAge: 10000, httpOnly: true, secure: true, sameSite: "strict" });

      const cookies = req.cookies.user;
      console.log(cookies);

      res.status(200).json({
        status: "success",
        payload: token,
      });
    } catch (error) {
      next(error);
    }
  };
}
