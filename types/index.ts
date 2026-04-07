export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string) => void;
  toggleTask: (id: string) => void;
}