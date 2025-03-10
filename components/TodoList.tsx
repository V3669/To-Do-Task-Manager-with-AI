'use client';

import React from 'react';

interface Todo {
  id: number;
  task: string;
}

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete }) => {
  return (
    <ul className="list-disc mb-4 w-full max-w-md">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow">
          <span>{todo.task}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
