const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
const addTask = () => {
    const taskText = input.value.trim(); // Get the input value and trim spaces
    if (taskText === '') return; // Prevent empty tasks

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a delete button to the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove(); // Remove the task when clicked

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the list
    todoList.appendChild(li);

    // Clear the input field
    input.value = '';
};

// Add task when the button is clicked
addButton.addEventListener('click', addTask);

// Add task when pressing Enter

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});