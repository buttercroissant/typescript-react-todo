import * as React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TaskList } from "./types";

const initialState: TaskList = { tasks: [] };

const App = () => {
  const [taskList, setTaskList] = React.useState<TaskList>(initialState);

  return (
    <div>
      <h1>Hello ToDo World</h1>
      <TodoInput taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;
