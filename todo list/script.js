function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const list = document.getElementById("task-list");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  // EDIT button
  const editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask) span.textContent = newTask;
  };

  // COMPLETE button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "COMPLETED";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    span.classList.toggle("completed");
  };

  // DELETE button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  buttons.append(editBtn, completeBtn, deleteBtn);
  li.append(span, buttons);
  list.appendChild(li);

  input.value = "";
}
