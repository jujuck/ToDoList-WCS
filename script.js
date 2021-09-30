const tasks = [
	{
		id: 1,
		label: "Pain",
		detail: "Achat de 2 pains",
		category: "Alimentaire",
		valid: true
	},
	{
		id: 2,
		label: "Twingo",
		detail: "Nettoyer la voiture",
		category: "Véhicule",
		valid: false
	},
]

let id = 2;

const myToDoListTable = () => {
	let toDoListeTable = `<table class="table">`;
	toDoListeTable += `<thead>`;
	toDoListeTable += `<tr>`;
	toDoListeTable += `<th scope="col">#</th>`;
	toDoListeTable += `<th scope="col">Label</th>`;
	toDoListeTable += `<th scope="col">Detail</th>`;
	toDoListeTable += `<th scope="col">Categorie</th>`;
	toDoListeTable += `<th scope="col">Actions</th>`;
	toDoListeTable += `</tr>`;
	toDoListeTable += `</thead>`;
	toDoListeTable += `<tbody id="task">`;
	toDoListeTable += `</tbody>`;
	toDoListeTable += `</table>`;

	let app = document.getElementById('app');
	app.innerHTML = toDoListeTable;

	for (let i = 0; i < tasks.length; i++) {
		addTaskToList(tasks[i]);
	}
}

const addTaskToList = (task) => {

	let myTask = `<th scope="row" id="header${task.id}" class=${task.valid ? "text-primary" : "text-danger"}>${task.id}</th>`;
	myTask += `<td>${task.label}</td>`
	myTask += `<td>${task.detail}</td>`;
	myTask += `<td>${task.category}</td>`;
	myTask += `<td>`;
	myTask += `<img src="./images/check-square.svg" alt="" id="check${task.id}" class="${task.valid ? "d-none" : ""}">`;
	myTask += `<img src="./images/square.svg" alt="" id="unCheck${task.id}" class="${task.valid ? '' : 'd-none'}" onclick="doneTask(${task.id})">`;
	myTask += `<img src="./images/trash-fill.svg" alt="" onclick="toDelete(${task.id})">`;
	myTask += `</td>`;

	let row = document.createElement('tr');
	row.setAttribute('id', `taskRow${task.id}`)
	row.innerHTML = myTask;

	let taskBody = document.getElementById('task');
	taskBody.appendChild(row);
}

const addNewTask = () => {
	id++;
	let newTask = {
		detail: document.getElementById('detail').value,
		category: document.getElementById('category').value,
		id,
		label: document.getElementById('label').value,
		valid: true
	}
	addTaskToList(newTask)
}

let addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', function(event) {
	event.preventDefault();
	addNewTask();
})

const doneTask = (id) => {
	let header = document.getElementById(`header${id}`);
	header.classList.remove('text-primary');
	header.classList.add('text-danger');

	let emptyBox = document.getElementById(`unCheck${id}`);
	emptyBox.classList.add('d-none');

	let doneBox = document.getElementById(`check${id}`);
	doneBox.classList.remove('d-none');
}

const toDelete = (id) => {
	let rowToDelete = document.getElementById(`taskRow${id}`);
	rowToDelete.remove();
}

myToDoListTable();