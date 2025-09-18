// Javascript

const completedElement = document.querySelector('#completed');
const inputToDo = document.querySelector('#inputToDo');
const addToDoBtn = document.querySelector('#addToDoBtn');
const infoTextElement = document.querySelector('small');
const todoList = document.querySelector('#todoList');
let todoText = '';
let completed = 0;
const allTheToDos = [];

addToDoBtn.addEventListener('click', addToDo);


function addToDo() {
    //things that will happen when you click the btn.

    infoTextElement.textContent = '';
    todoText = inputToDo.value;
    if (todoText.length == 0) {
        infoTextElement.textContent = 'Du måste skriva något';
        return;
    }
// Add todo to the todo array
    allTheToDos.push(todoText);
   
   
    const item = document.createElement('li');
    todoList.appendChild(item);

    const itemText = document.createElement('span');
    itemText.innerText = todoText;

    // add event listener to span with text

    itemText.addEventListener('click',
        function () {
            if (itemText.classList.contains('completed')) {
                itemText.setAttribute('class', '');
                completed--;
                completedElement.textContent = 'Du har ' + completed

            }
            else {
                itemText.setAttribute('class', 'completed') 
                completed++;
                completedElement.textContent = 'Du har ' + completed
            }

        }
    )

/* label.innertext = `${completed} completed`; */


    item.appendChild(itemText);

    completedElement.textContent = 'Du har ' + completed + 'tasks!';
    // as last thing: empty input field

    inputToDo.value = '';
}

