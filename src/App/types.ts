export interface TaskItem {
  id: string;
  task: string;
  completed: boolean;
}

export interface TaskList {
  tasks: TaskItem[];
}

export interface TaskListProps {
  taskList: TaskList;
  setTaskList: React.Dispatch<React.SetStateAction<TaskList>>;
}
