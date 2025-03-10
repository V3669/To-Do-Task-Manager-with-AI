'use client';

import React, { useState, useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function HomePage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState<string>("");

  const addTask = (task: string) => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };

  // Fetch AI suggestion when tasks change
  useEffect(() => {
    const fetchSuggestion = async () => {
      if (tasks.length === 0) {
        setAiSuggestion("You have no tasks yet. Add one to get a suggestion!");
        return;
      }
      try {
        const res = await fetch("/api/suggest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tasks }),
        });
        if (res.ok) {
          const data = await res.json();
          setAiSuggestion(data.suggestion || "");
        } else {
          setAiSuggestion("Failed to get AI suggestion.");
        }
      } catch (error) {
        console.error(error);
        setAiSuggestion("Error fetching AI suggestion.");
      }
    };

    fetchSuggestion();
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList 
        todos={tasks.map((task, index) => ({ id: index, task }))} 
        onDelete={deleteTask} 
      />
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 w-80 rounded mt-4">
        <p className="font-medium">AI Suggestion:</p>
        <p>{aiSuggestion}</p>
      </div>
    </div>
  );
}
