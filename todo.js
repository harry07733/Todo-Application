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

let todoCount = todoList.length;

function onTodoStatusChanged(checkboxId, labelId) {
    // let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    // if(checkboxElement.checked === true){
    //     labelElement.classList.add("checked");
    // }
    // else{
    //     labelElement.classList.remove("checked");
    // }

    labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    // For li
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    // For input
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");

    inputElement.onclick = function() {
        onTodoStatusChanged(checkboxId, labelId);
    }

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
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    // For div
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer); 

    // For i
    let iconElement = document.createElement("i");
    iconElement.classList.add("fa-solid", "fa-trash", "delete-icon");
    iconElement.onclick = function() {
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(iconElement);
}
// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

for(let todo of todoList){
    createAndAppendTodo(todo);
}


function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value; 
    if(userInputValue === ""){
        alert("Enter a valid text!!");
        return;
    }
    todoCount += 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount
    }

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() {
    onAddTodo();
}