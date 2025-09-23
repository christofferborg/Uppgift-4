// Javascript

const completedElement = document.querySelector('#completedElement');
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
        infoTextElement.textContent = 'Du måste skriva något!';
        return;
    }
    // Add todo to the todo array
    allTheToDos.push(todoText);


    const item = document.createElement('li');
    todoList.appendChild(item);

    //Create span for todo-text
    const itemText = document.createElement('span');
    itemText.innerText = todoText;

    // Create span for waste bin

    const thrashSpan = document.createElement('span');
    thrashSpan.innerText = ' 🗑️';
    thrashSpan.classList.add('thrash-icon');

    // Add eventlistener for waste bin
    thrashSpan.addEventListener('click', () => {

        if (itemText.classList.contains('completed')) {
            completed--;
            completedElement.textContent = updateCompleted();
            item.remove();
        }
        else
            item.remove();
    }
    )
    // add event listener to span with text
    itemText.addEventListener('click',
        function () {
            if (itemText.classList.contains('completed')) {
                itemText.setAttribute('class', '');
                completed--;
                completedElement.textContent = updateCompleted();

            }
            else {
                itemText.setAttribute('class', 'completed')
                completed++;
                completedElement.textContent = updateCompleted();
            }

        }
    )
    // Add the todos and the thrash bin to the list.
    item.appendChild(itemText);
    item.appendChild(thrashSpan);

    completedElement.textContent = updateCompleted();

    // Empty textfield

    inputToDo.value = '';
}

const updateCompleted = () => {
    if (completed === 1) {
        return 'Du har ' + completed + ' slutförd uppgift!';
    }

    else {
        return 'Du har ' + completed + ' slutförda uppgifter!';
    }
};


// Empty textfield when reloading browser.
inputToDo.value = '';




