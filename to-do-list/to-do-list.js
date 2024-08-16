document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const taskCount = document.querySelector('.task-count');
    const progressBar = document.querySelector('.progress-bar');

    let tasks = [
        { text: 'create-js-project', completed: true },
        { text: 'deploy that', completed: true },
        { text: 'like this video', completed: false },
    ];

    function renderTasks() {
        taskList.innerHTML = '';
        let completedTasks = 0;

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.classList.add('task-item');
            if (task.completed) {
                li.classList.add('completed');
                completedTasks++;
            }

            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                ${task.text}
                <div>
                    <button class="edit-btn" data-index="${index}">✏️</button>
                    <button class="delete-btn" data-index="${index}">🗑️</button>
                </div>
            `;

            taskList.appendChild(li);
        });

        updateProgress(completedTasks);
    }

    function updateProgress(completedTasks) {
        const totalTasks = tasks.length;
        const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
        progressBar.style.width = progress + '%';
        taskCount.textContent = `${completedTasks} / ${totalTasks}`;
    }

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    taskList.addEventListener('click', function(event) {
        const index = event.target.dataset.index;
        if (event.target.tagName === 'BUTTON') {
            if (event.target.classList.contains('delete-btn')) {
                tasks.splice(index, 1);
            } else if (event.target.classList.contains('edit-btn')) {
                const newTaskText = prompt('Edit your task:', tasks[index].text);
                if (newTaskText) {
                    tasks[index].text = newTaskText;
                }
            }
            renderTasks();
        } else if (event.target.type === 'checkbox') {
            tasks[index].completed = event.target.checked;
            renderTasks();
        }
    });

    renderTasks();
});
