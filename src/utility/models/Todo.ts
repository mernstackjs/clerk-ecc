import mongoose, { Document, Model, Schema } from "mongoose";

interface ITodo extends Document {
  task: string;
  userId: string;
}

const todoSchema: Schema<ITodo> = new Schema({
  task: { type: String, required: true },
  userId: { type: String, required: true },
});

const Todo: Model<ITodo> =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;
