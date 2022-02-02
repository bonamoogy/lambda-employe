import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

export const routeNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    message: "Failed! Request API not found!",
    status: false,
    statusCode: 404,
  });
};

export const errorRequest: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.toError);
  console.log(err.message);
  const statusCode = err.statusCode || 500;
  const message = err.message || "sorry. something went wrong";

  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
  });
};
