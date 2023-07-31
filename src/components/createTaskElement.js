export const createTaskElement = (taskText) => {
  const taskItem = document.createElement("li");

  // Create a span to display the task text (hidden while editing)
  const taskSpan = document.createElement("input");
  taskSpan.value = taskText;

  // Add a delete button to the task
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.className = "clear-btn";
  deleteButton.addEventListener("click", () => deleteTask(taskItem));

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);

  return taskItem;
};

export const deleteTask = (taskElement) => {
  taskElement.remove();
};
