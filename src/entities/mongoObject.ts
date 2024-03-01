class MongoObject {
  id: string;
  message: string;

  constructor(id: string, message: string) {
    this.id = id;
    this.message = message;
  }
}

export { MongoObject };
