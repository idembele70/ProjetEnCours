// Variables
const spanJour = document.getElementById('spanDay');
let TodoSaisie = document.querySelector('.todoWrited');
const btnAddTodo = document.querySelector('.btnAddTodo');
const ulList = document.getElementById('ulList');

// Ecouteurs
btnAddTodo.addEventListener('click', addTodo);

// Functions
function JourDeLaSemaine() {
    const jour = new Date()
    let day = jour.getDay();
    switch (day) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break

        case 2: day = "Mardi";
            break

        case 3: day = "Mercredi";
            break

        case 4: day = "Jeudi";
            break

        case 5: day = "Vendredi";
            break

        case 6: day = "Samedi";
            break
        default:
            "nothing";
            break;
    }
    spanJour.innerText += " " + day;
}
JourDeLaSemaine();

function addTodo(inputValue) {
    const todoDivContainer = document.createElement('div');
    const divContainerRow = document.createElement('div');
    divContainerRow.className = "row liRow";
    todoDivContainer.className = "container";

    const li = document.createElement('li');
    // const checkBox = document.createElement('input');
    // checkBox.type = 'checkbox';
    // checkBox.classList.add('checked','col-1');
    const todo = document.createElement('input');
    todo.disabled = true;
    todo.classList.add('col-9', 'liInput');
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('col-3', 'btnDelete');
    btnDelete.innerHTML = '<i class="far fa-minus-square"></i>';

    // divContainerRow.appendChild(checkBox);
    divContainerRow.appendChild(todo);
    divContainerRow.appendChild(btnDelete);
    todoDivContainer.appendChild(divContainerRow);
    li.appendChild(todoDivContainer);
    ulList.appendChild(li);
}

function name(params) {

}

function liste() {

}