const createTask = () => {
  const inputValue = document.getElementById("grocery").value;

  // create elements
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.innerHTML = inputValue;

  const editBtn = document.createElement.apply("button");
  editBtn.innerHTML = "edit";
  const deleteBtn = document.createElement.apply("button");
  deleteBtn.innerHTML = "delete";

  // append elements
  div.append(input, editBtn, deleteBtn);
};

export default createTask;
