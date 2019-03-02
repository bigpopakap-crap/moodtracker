import { Document, model, Schema } from 'mongoose';

// Declare model interface
interface StoredMood extends App.Item, Document {}

const itemSchemaDef: {} = {
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
};

// Define model schema
const itemSchema = new Schema(itemSchemaDef);

export default model<ItemDoc>('Item', itemSchema);
