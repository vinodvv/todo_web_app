document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
    const saveButton = document.getElementById("save-button");

    const getDayName = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date().getDay()];
    };

    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText === "") {
            alert("Please enter a to-do item!")
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = todoText;
        todoList.appendChild(listItem);
        todoInput.value = "";
    };

    const saveTodos = () => {
        const todos = [];
        todoList.querySelectorAll("li").forEach((item) => {
            todos.push(item.textContent);
        });

        if (todos.length === 0) {
            alert("Your to-do list is empty!");
            return;
        }

        const content = todos.join("\n");
        const filename = `${getDayName()}.txt`;
        const blob = new Blob([content], {type: "text/plain"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    };

    addButton.addEventListener("click", addTodo);
    saveButton.addEventListener("click", saveTodos);

    todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
