document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.textContent = task;
        
        // Create the edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            const newTask = prompt('Edit task:', task);
            if (newTask !== null && newTask.trim() !== '') {
                li.firstChild.textContent = newTask; // Update the task text
            }
        });

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(editButton);
        li.appendChild(removeButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
