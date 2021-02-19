import mongoose from "mongoose";
import InternalServerError from "./errors/InternalServerError";
import DBCards from "./models/DBCards";

export default class DatabaseController {
  private static instance: DatabaseController;
  private connection_url: string = `mongodb+srv://admin:${process.env.DATABASE_PASSWORD}@cluster0.mxtva.mongodb.net/react-tinder-db?retryWrites=true&w=majority`;

  private constructor() {
    mongoose.connect(this.connection_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new DatabaseController();
    }
    return this.instance;
  }

  public getCards = async () => {
    const data = await DBCards.find((err: any, data: Card[]) => {
      if (err) {
        throw new InternalServerError(err.toString());
      }
    });
    return data;
  };

  public saveCard = async (card: Card) => {
    const data = DBCards.create(card, (err: any, data: any) => {
      if (err) {
        throw new InternalServerError(err.toString());
      }
    });
    return data;
  };
}
