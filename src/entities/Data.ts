import mongoose, { Schema, Document, Model } from 'mongoose';

interface IData extends Document {
  id: string;
  message: string;
}

const mongoSchema: Schema = new Schema({
  id: { type: String, required: true },
  message: { type: String, required: true },
});

const Data: Model<IData> = mongoose.model<IData>('Data', mongoSchema);

export { Data, IData };