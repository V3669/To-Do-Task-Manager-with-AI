'use client';
import { useState } from 'react';
import { fetchAiSuggestion } from '../lib/ai';

interface Props {
  onAdd: (task: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [task, setTask] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
      setAiSuggestion('');
    }
  };

  const handleSuggest = async () => {
    if (task.trim()) {
      const suggestion = await fetchAiSuggestion(task);
      if (suggestion) setAiSuggestion(suggestion);
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
      <div className="flex gap-2">
        <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
        <button onClick={handleSuggest} className="bg-gray-500 text-white p-2 rounded">
          Suggest
        </button>
      </div>
      {aiSuggestion && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <strong>Suggestion:</strong> {aiSuggestion}
        </div>
      )}
    </div>
  );
}
