import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import ExpressSession from "express-session";

import { helloWorldRoutes } from "./routes/TinderRouter";

import dotenv from "dotenv";
dotenv.config();

 class App {
  public expressApp: express.Application;
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.expressApp.use(function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    this.expressApp.use(logger("dev"));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    this.expressApp.use(
      ExpressSession({
        secret: "My Secret Key",
        resave: true,
        saveUninitialized: true,
      })
    );
  }

  private routes(): void {
    this.expressApp.use("/tinder", helloWorldRoutes.router);
  }
}

export default new App().expressApp;
