
'use client';

import { useState } from 'react';

interface Props {
  onAdd: (task: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button 
        onClick={handleAdd} 
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
}
