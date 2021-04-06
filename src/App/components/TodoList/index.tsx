import * as React from "react";
import { TaskListProps, TaskItem } from "../../types";

const TodoList = ({ taskList, setTaskList }: TaskListProps) => {
  const onClick = (taskId: string) => {
    setTaskList({
      tasks: taskList.tasks.filter((t) => t.id !== taskId),
    });
  };

  return (
    <div>
      {taskList.tasks.map((t: TaskItem) => (
        <div>
          <h2>{t.task}</h2>
          <button onClick={() => onClick(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
