import { NextFunction, Request, Response } from "express";
import auth from "basic-auth";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = "test_user";
    const pass = "test123";
    const user = await auth(req);
    if (
      user &&
      user.name.toLowerCase() === username &&
      user.pass.toLowerCase() === pass
    ) {
      next();
    } else res.status(401).json("User not Authorization");
  } catch (e) {
    next(e);
  }
};

export default isAuth;
