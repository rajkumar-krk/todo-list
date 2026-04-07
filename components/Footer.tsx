import React from 'react';
import { Task } from '../types';
import { BarChart3 } from 'lucide-react';

interface FooterProps {
  tasks: Task[];
}

export default function Footer({ tasks }: FooterProps) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;
  const remainingCount = totalCount - completedCount;
  const completionPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <footer className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <BarChart3 className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-800">Task Summary</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{totalCount}</p>
          <p className="text-sm text-gray-600">Total Tasks</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">{remainingCount}</p>
          <p className="text-sm text-gray-600">Remaining</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">Progress</p>
          <p className="text-sm font-bold text-indigo-600">{completionPercentage}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </footer>
  );
}