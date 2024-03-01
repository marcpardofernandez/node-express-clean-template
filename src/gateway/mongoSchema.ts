import { Schema } from 'mongoose';

const mongoSchema: Schema = new Schema({
  id: { type: String, required: true },
  message: { type: String, required: true },
});

export {mongoSchema };