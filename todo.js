let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    // For li
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    // For input
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    // For div
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);
    console.log(todoElement);

    // For label
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text ;
    labelContainer.appendChild(labelElement);

    // For div
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer); 

    // For i
    let iconElement = document.createElement("i");
    iconElement.classList.add("fa-solid", "fa-trash", "delete-icon");
    deleteIconContainer.appendChild(iconElement);
}
// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

for(let todo of todoList){
    createAndAppendTodo(todo);
}

