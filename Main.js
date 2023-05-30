document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");
    const clearBtn = document.getElementById("clear-btn");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task !== "") {
            addTask(task);
            input.value = "";
        }
    });

    function addTask(task) {
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            todoItem.classList.toggle("completed");
        });

        const label = document.createElement("label");
        label.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            list.removeChild(todoItem);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteBtn);
        list.appendChild(todoItem);
    }

    clearBtn.addEventListener("click", function() {
        const completedItems = list.getElementsByClassName("completed");
        while (completedItems.length > 0) {
            completedItems[0].remove();
        }
    });
});