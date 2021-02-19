export default class InternalServerError extends Error {
  private _code: number = 500;

  constructor(message: string) {
    super(message);
  }

  get code() {
    return this._code;
  }
}
