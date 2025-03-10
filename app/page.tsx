'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  // ✅ Add new task
  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  // ✅ Generate AI-like suggestion based on tasks
  const generateSuggestion = () => {
    if (tasks.length === 0) {
      return "You have no tasks yet. Let's add something to get started!";
    } else if (tasks.length === 1) {
      return `You can start with "${tasks[0]}".`;
    } else {
      return `You are currently working on "${tasks[0]}". You can also consider "${tasks[1]}".`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">To-Do List</h1>

      {/* Task Input */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 rounded-l px-4 py-2 w-64"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="list-disc mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="text-lg">{task}</li>
        ))}
      </ul>

      {/* ✅ AI Suggestion */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 w-80 rounded">
        <p className="font-medium">AI Suggestion:</p>
        <p>{generateSuggestion()}</p>
      </div>
    </div>
  );
}
