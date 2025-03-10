'use client';

interface Props {
  tasks: string[];
  onDelete: (index: number) => void;
}

export default function TodoList({ tasks, onDelete }: Props) {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between items-center p-2 bg-white shadow mb-2 rounded">
          <span>{task}</span>
          <button onClick={() => onDelete(index)} className="text-red-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
