"use server";

import connectDB from "../db";
import Todo from "../models/Todo";

export async function createTodo(todo: any) {
  try {
  } catch (error) {
    await connectDB();
    const newTodo = await Todo.create(todo);
    return JSON.parse(JSON.stringify(newTodo));
  }
}
