import employeController from "../controllers/employe-controller";
import BaseRouter from "./Base-Router";

class EmployeRoutes extends BaseRouter {
  constructor() {
    super();
    this.router.get("/", employeController.getEmployes);
    this.router.get("/:id", employeController.getEmployes);
    this.router.post("/", employeController.create);
    this.router.patch("/:id", employeController.update);
    this.router.delete("/:id", employeController.delete);
  }
}

export default new EmployeRoutes().router;
