
import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'AI To-Do List',
  description: 'AI-enhanced to-do list built with Next.js 14',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="p-4 bg-blue-500 text-white">
        <h1>Todo AI App</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
