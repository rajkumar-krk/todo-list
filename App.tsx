import React from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import useTasks from './hooks/useTasks';
import './index.css';

export default function App() {
  const { tasks, addTask, deleteTask, updateTask, toggleTask } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Header />
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <TaskInput onAddTask={addTask} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={updateTask}
          />
        </div>
        <Footer tasks={tasks} />
      </div>
    </div>
  );
}