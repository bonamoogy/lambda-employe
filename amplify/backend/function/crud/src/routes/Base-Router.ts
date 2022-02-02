import { Router } from "express";

abstract class BaseRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }
}

export default BaseRouter;
