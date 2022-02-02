import { Request, Response, NextFunction } from "express";
import Employe from "../models/Employe";

class EmployeController {
  async getEmployes(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.params.id) {
        const employe = await Employe.findByPk(req.params.id);
        if (!employe) {
          throw new Error("Employe not found");
        }
        return res.json({
          message: "Success get data Employe",
          result: employe,
        });
      }
      res.json({
        message: "Success get data Employes",
        results: await Employe.findAll(),
      });
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, firstName, lastName } = req.body;
      const result = await Employe.create({
        email,
        firstName,
        lastName,
      });
      return res.json({
        message: "Success create new Employe",
        id: result.id,
      });
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, firstName, lastName } = req.body;
      const id = req.params.id;
      if (!id) {
        const err = new Error("please fit the required field");
        throw err;
      }
      const employe = await Employe.findByPk(id);
      if (!employe) {
        const err = new Error("Data employe not found");
        throw err;
      }
      employe.email = email;
      employe.firstName = firstName;
      employe.lastName = lastName;
      await employe.save();
      return res.json({
        message: "Success update Employe",
        result: employe,
      });
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        const err = new Error("please fit the required field");
        throw err;
      }
      const employe = await Employe.findByPk(id);
      if (!employe) {
        const err = new Error("Data employe not found");
        throw err;
      }
      await employe.destroy();
      return res.json({
        message: "Success delete Employe",
      });
    } catch (e) {
      next(e);
    }
  }
}

export default new EmployeController();
