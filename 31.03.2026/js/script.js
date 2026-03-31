let user_input = localStorage.getItem("name");
const save_btn = document.querySelector("#save_btn");
const inputElement = document.querySelector("#user_input");
const reveal_btn = document.querySelector("#reveal_btn");
const reveal_p = document.querySelector("#reveal_p");
const clear_btn = document.querySelector("#clear_btn");
const count_btn = document.querySelector('#count_btn');
const count_span = document.querySelector('#count_span');
const visits_span = document.querySelector('#visits_span');
let counts = localStorage.getItem("counts");
let visits = parseInt(localStorage.getItem('visits'), 10);

const clear_all_btn = document.querySelector('#clear_all_btn');

const task_list = document.querySelector('#task_list');
const task_save_btn = document.querySelector('#task_save_btn');
const taskInputElement = document.querySelector('#task_input');
const task_load_btn = document.querySelector('#task_load_btn');
let itemsArray = JSON.parse(localStorage.getItem('listItems')) || [];

const color_input = document.querySelector('#color_input');
const color_add_btn = document.querySelector('#color_add_btn');
const color_container = document.querySelector('#color_container');
let colorsArray = JSON.parse(localStorage.getItem('colors')) || [];

count_span.textContent = counts;

visits = Number.isNaN(visits) ? 0 : visits;
visits += 1;
localStorage.setItem('visits', visits);
visits_span.textContent = visits;

save_btn.addEventListener('click', () => {
    localStorage.setItem("name", inputElement.value);
    alert("Saved successfully!")
    console.log(user_input);
    inputElement.value = null;
})

reveal_btn.addEventListener('click', () => {
    reveal_p.textContent = user_input
})

clear_btn.addEventListener('click', () => {
    localStorage.setItem("name", JSON.stringify(null));
    alert("Cleared successfully!")
})

clear_all_btn.addEventListener('click', () => {
    localStorage.clear();
    alert("All localStorage cleared successfully!")
})

function themeToggler() {
    let theme = localStorage.getItem("theme");
    if (theme === null) {
        localStorage.setItem("theme", "white");
    }
    if (theme === "blue") {
        localStorage.setItem("theme", "white")
        document.body.style.background = "white";
    }
    if (theme === "white") {
        localStorage.setItem("theme", "blue")
        document.body.style.background = "blue";
    }
    console.log(theme);
}

count_btn.addEventListener('click', () => {
    if (counts == null) {
        counts = 0;
    }
    else {
        counts++;
        localStorage.setItem("counts", counts);
    }
    count_span.textContent = counts
    console.log(counts);
})

task_save_btn.addEventListener('click', () => {
    const taskText = taskInputElement.value.trim();
    if (!taskText) {
        alert('Input is empty!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    task_list.appendChild(li);
    itemsArray.push(taskText);
    localStorage.setItem('listItems', JSON.stringify(itemsArray));
    taskInputElement.value = '';
});


task_load_btn.addEventListener('click', () => {
    loadTasks();
});

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem('listItems'));
    itemsArray = Array.isArray(saved) ? saved : [];

    task_list.innerHTML = '';
    itemsArray.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        task_list.appendChild(li);
    });
}


