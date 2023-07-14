// Get the required elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('label');
  label.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  // Add event listener to delete button
  deleteBtn.addEventListener('click', function () {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteBtn);

  return listItem;
}

// Function to handle the add button click
function addTodoItem() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const listItem = createTodoItem(todoText);
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

// Add event listener to add button
addBtn.addEventListener('click', addTodoItem);