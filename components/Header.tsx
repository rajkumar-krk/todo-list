import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Todo List' }: HeaderProps) {
  return (
    <header className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <CheckCircle2 className="w-10 h-10 text-indigo-600" />
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      </div>
      <p className="text-gray-500 text-lg">Stay organized and productive</p>
    </header>
  );
}