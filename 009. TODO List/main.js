// Con innerHTML puedes enviar codigo html a la pagina mientras que con
// innerText Puedes enviar texto y codigo de todo tipo solo en forma de texto

/* const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form'); // Tomamos el formulario y tomamos la referencia con getelement
    form.onsubmit = (e) => { // Luego reemplazamos la funcion que tiene en onsubmit
        e.preventDefault(); //elimina el efecto que tienen los formularios que hace que la pagina se refresque
        const todo = document.getElementById('todo'); //Luego vamos a todo para sacarle el valor que tiene
        const todoText = todo.value; // para reemplazarlo por un value
        todo.value = ''; // luego reemplazamos su valor por un string vacio
        console.log(todo); //Aca mostramos en consola su valor
    }
} */

const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form'); 
    form.onsubmit = (e) => { 
        e.preventDefault();
        const todo = document.getElementById('todo'); 
        const todoText = todo.value; 
        todo.value = '';
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i = 0; i < todos.length; i++) {
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }
    }
}