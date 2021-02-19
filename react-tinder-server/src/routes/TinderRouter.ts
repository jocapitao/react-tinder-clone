import { Router, Request, Response, NextFunction } from "express";
import DatabaseController from "../core/DatabaseController";

export default class TinderRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private getCards = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await DatabaseController.getInstance().getCards();
      return res.status(200).send(data);
    } catch (error) {
      return res.status(error.code()).send(error);
    }
  };

  private saveCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await DatabaseController.getInstance().saveCard(req.body);
      return res.status(201).send(data);
    } catch (error) {
      return res.status(error.code()).send(error);
    }
  };

  init(): void {
    this.router.get("/cards", this.getCards.bind(this));
    this.router.post("/cards", this.saveCard.bind(this));
  }
}

export const helloWorldRoutes = new TinderRouter();
helloWorldRoutes.init();
