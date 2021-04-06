import * as React from "react";
import { v4 as uuid } from "uuid";
import { TaskListProps } from "../../types";

const TodoInput = ({ taskList, setTaskList }: TaskListProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const changeHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputVal = inputRef.current.value.trim();

    if (inputVal === "") return;
    if (e.key === "Enter") {
      setTaskList({
        tasks: [
          ...taskList.tasks,
          { id: uuid(), task: inputVal, completed: false },
        ],
      });

      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task to do"
        ref={inputRef}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          changeHandle(e)
        }
      />
    </div>
  );
};

export default TodoInput;
