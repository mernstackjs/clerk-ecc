import connectDB from "@/utility/db";
import Todo from "@/utility/models/Todo";
import React from "react";

export default function Home() {
  const addTodo = async (formDate: FormData) => {
    "use server";
    const userId = await formDate.get("userId");
    const task = await formDate.get("task");
    await connectDB();
    const todo = await Todo.create({ userId, task });
    console.log(todo);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={addTodo}
        className="border w-1/3 shadow-lg p-12 flex flex-col gap-6 "
      >
        <input name="userId" className="w-full border p-3 rounded-md" />
        <input name="task" className="w-full border p-3 rounded-md" />
        <button
          type="submit"
          className="w-full border p-3 rounded-md bg-slate-950 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}
