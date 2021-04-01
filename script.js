const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const container = document.getElementById("container")
const title = document.getElementById("title");
let inputColor = document.getElementById("inputColor");

let elemento1 = document.getElementsByClassName('controls')
let elemento2 = document.getElementsByClassName('title')
let elemento3 = [];

let divFelicitacion = document.createElement('div')
divFelicitacion.classList.add('felicitacion')
divFelicitacion.classList.add("display-none")

divFelicitacion.innerHTML ="Felicitaciones terminaste una tarea!";


inputColor.value = "#3DA6E2";


let divAviso = document.createElement("div")


let toDos = [];
var conteo = 0;
var tareasRealizadas = 0;

function newTodo() {
  let todo = "HOLA";
  let descripcion = "fuck";

  toDos.push(todo);

  crearElemento()

}

var conteoEliminar = 0;



function crearElemento() {

  let nuevoLi = document.createElement("li");
  let div = document.createElement("div")
  let divdentro = document.createElement("div")
  let textAreaTitle = document.createElement("textarea");
  let textAreaParrafo = document.createElement("textarea")
  var boton = document.createElement("button")

  list.appendChild(nuevoLi);
  nuevoLi.appendChild(div);
  div.appendChild(textAreaTitle);
  textAreaTitle.placeholder = "Escriba el titulo";
  textAreaParrafo.placeholder = "Escriba las tareas"
  div.appendChild(textAreaParrafo);

  boton.classList.add("boton")

  boton.addEventListener("click", function (i) {
    nuevoLi.remove();
    itemCountSpan.innerHTML = --conteo;
    ++tareasRealizadas
    uncheckedCountSpan.innerHTML = tareasRealizadas;

  })

  let suma = 1;

  conteo = conteo + suma;


  itemCountSpan.innerHTML = conteo;

  //seteando el color
  let valorInput = inputColor.value;
  div.setAttribute("style", `background: ${valorInput}`)

  //botones para eliminar
  div.appendChild(divdentro)
  divdentro.appendChild(boton)
  boton.innerHTML = "Eliminar";

  //boton 2
  let boton2 = document.createElement("button")
  divdentro.appendChild(boton2)
  boton2.innerHTML = "Ready";
  div.classList.add("tarjeta");

  boton2.addEventListener("click", function (i) {
    nuevoLi.remove();
    itemCountSpan.innerHTML = --conteo;
    ++tareasRealizadas
    uncheckedCountSpan.innerHTML = tareasRealizadas;
    divFelicitacion.classList.remove("display-none")
   
    var completado= "false" ;
    var timer= setTimeout(function(){
      list.appendChild(divFelicitacion)
      completado= "true"
      console.log(completado)
    },200)

    setTimeout(function(){
      if(completado=="true"){
        divFelicitacion.classList.add("display-none")
        console.log(completado)
      }
     
    },3000)

  })

  //boton 3
  let boton3 = document.createElement("button")
  divdentro.appendChild(boton3)
  boton3.innerHTML = "Editar";
  div.classList.add("tarjeta");

  boton3.addEventListener('click', function () {
    let liList = document.querySelectorAll("#todo-list > li > div > textarea")
    for (let i = 0; i < liList.length; i++) {
      liList[i].style.pointerEvents = "auto";
  
    }
    divAviso.classList.add("div-aviso")
    divAviso.classList.remove("display-none")

    divAviso.innerHTML = "Pulsa aquí para terminar edición"

  })

  divAviso.classList.remove("display-none")
  divAviso.classList.add("div-aviso")

  divAviso.innerHTML = "Pulsa aquí para terminar edición"
  list.appendChild(divAviso)



  return conteo


}


function terminarEdicion() {
  let liList = document.querySelectorAll("#todo-list > li > div > textarea")
  for (let i = 0; i < liList.length; i++) {
    liList[i].style.pointerEvents = "none";

  }
  divAviso.innerHTML = "Edición terminada"
  divAviso.classList.add("display-none")
}


let container2 = document.getElementsByClassName("container-list")
console.log(container2)

title.addEventListener("click", function () {

  terminarEdicion()
})

// elemento1[0].addEventListener("click", function (){

//   terminarEdicion()
// })

elemento2[0].addEventListener("click", function () {

  terminarEdicion()
})

console.log(elemento3)

divAviso.addEventListener("click", function () {

  terminarEdicion()
})

