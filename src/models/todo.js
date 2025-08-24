import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default model('Todo', TodoSchema);
