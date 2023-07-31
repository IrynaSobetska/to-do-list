import addTask from "./addTask.js";

const ifEnter = (event) => {
  if (event.key === "Enter") {
    addTask();
  }
};

export default ifEnter;
