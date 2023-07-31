import { createTaskElement } from "./createTaskElement.js";

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
};

export default addTask;
