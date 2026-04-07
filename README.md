# Todo List Application

A simple and intuitive todo list application for managing daily tasks with add, edit, delete, and mark-complete functionality.

## Features

✅ **Add New Tasks** - Quickly add tasks to your list with a clean input form
✅ **Mark Complete** - Toggle tasks as complete/incomplete with visual feedback
✅ **Edit Tasks** - Inline editing to update task descriptions
✅ **Delete Tasks** - Remove tasks you no longer need
✅ **Persistent Storage** - All tasks are saved to local storage automatically
✅ **Task Statistics** - View total, completed, and remaining task counts
✅ **Progress Tracking** - Visual progress bar showing completion percentage
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

## Technology Stack

- **React 18** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better code quality
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful and consistent icon library
- **Vite** - Fast build tool and development server

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a Task
1. Type your task description in the input field
2. Click the "Add" button or press Enter
3. The task will appear at the top of your list

### Completing a Task
1. Click the circle checkbox next to a task
2. The task will be marked as complete with a strikethrough
3. The progress bar will update automatically

### Editing a Task
1. Hover over a task to reveal the edit button
2. Click the edit icon (pencil)
3. Modify the task description
4. Click the checkmark to save or X to cancel

### Deleting a Task
1. Hover over a task to reveal the delete button
2. Click the trash icon
3. The task will be removed from your list

## Project Structure

```
src/
├── App.tsx                 # Root component
├── index.css              # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx         # Application header with title
│   ├── TaskInput.tsx      # Input form for adding tasks
│   ├── TaskList.tsx       # Container for all tasks
│   ├── TaskItem.tsx       # Individual task component
│   └── Footer.tsx         # Task statistics and summary
├── hooks/
│   └── useTasks.ts        # Custom hook for task management
└── types/
    └── index.ts           # TypeScript interfaces and types
```

## Component Overview

### App.tsx
The root component that orchestrates the entire application. It manages the overall layout and passes data to child components.

### Header.tsx
Displays the application title and branding with an icon.

### TaskInput.tsx
Provides a form for users to add new tasks with validation.

### TaskList.tsx
Container component that renders all tasks and displays an empty state when no tasks exist.

### TaskItem.tsx
Individual task component with complete, edit, and delete functionality.

### Footer.tsx
Displays task statistics including total, completed, and remaining counts with a progress bar.

### useTasks Hook
Custom React hook that manages task state and local storage persistence. Provides methods for adding, deleting, updating, and toggling tasks.

## Local Storage

All tasks are automatically saved to the browser's local storage. Your tasks will persist even after closing and reopening the browser.

## Styling

The application uses Tailwind CSS for styling with a modern gradient background and clean card-based layout. All components are fully responsive and work on mobile, tablet, and desktop devices.

## Future Enhancements

- Task categories and tags
- Due dates and reminders
- Task priority levels
- Dark mode toggle
- Export/import functionality
- Recurring tasks

## License

MIT License - feel free to use this project for personal or commercial purposes.
