let todoItemsContainer = document.getElementById("todoItemsContainer");

let saveTodoButton = document.getElementById("saveTodoButton");
saveTodoButton.onclick = function() {
    localStorage.setItem("todolist", JSON.stringify(todoList));
}

function getTodoListFromLocalStorage(){
    let stringifyTodoList = localStorage.getItem("todolist");
    let parsedTodoList = JSON.parse(stringifyTodoList);

    if(parsedTodoList === null){
        return [];
    }
    else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();


let todoCount = todoList.length;

function onTodoStatusChanged(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoItemIndex = todoList.findIndex(function(eachItem){
        let eachTodoId = "todo" + eachItem.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }

    });
    let todoObject = todoList[todoItemIndex];  
    if(todoObject.isChecked){
        todoObject.isChecked = false;
    }
    else{
        todoObject.isChecked = true;
    }

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    
    let deleteElementIndex = todoList.findIndex(
        function(eachTodo){
            let eachTodoId = "todo" + eachTodo.uniqueNo;
            if(eachTodoId === todoId){
                return true;
            }
            else{
                return false;
            }
        }
    );
    todoList.splice(deleteElementIndex, 1);
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
    inputElement.checked = todo.isChecked;

    inputElement.onclick = function() {
        onTodoStatusChanged(checkboxId, labelId, todoId);
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
    if(todo.isChecked){
        labelElement.classList.add("checked");
    }
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
        uniqueNo: todoCount,
        isChecked: false
    }
    todoList.push(newTodo);

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() {
    onAddTodo();
}

