const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const container= document.getElementById("container")
const title = document.getElementById("title");
let inputColor = document.getElementById("inputColor");

let toDos=[];
var conteo;

function newTodo() {
  alert('New TODO button clicked!')
  todo= [ titulo = prompt("ingre el titulo del TODO"),
  descripcion= prompt("ingrese la descripción del TODO")]

  toDos.push(todo);

  crearElemento()

}

function crearElemento(){

  itemCountSpan.innerHTML = toDos.length ;
  let valorInput = inputColor.value;


  for(let i=0; i<toDos.length; i++){
    var textoTitle= document.createTextNode(toDos[i][0]) ;
    var textoDescrip= document.createTextNode(toDos [i][1]) ;
    conteo= i;
    

  }

  let nuevoLi = document.createElement("li");
  let nuevoh1 = document.createElement("h3");
  let parrafo = document.createElement("p")
  let boton = document.createElement("button")
  let boton2 = document.createElement("button")

  title.after(nuevoLi);
  nuevoLi.appendChild(nuevoh1);
  nuevoh1.appendChild(textoTitle);
  nuevoLi.appendChild(parrafo);
  parrafo.appendChild(textoDescrip);
  nuevoLi.appendChild(boton)
  boton.innerHTML= "Eliminar";
  boton.addEventListener("click" , function(conteo){
    nuevoLi.remove();
  ;
  },false);


  nuevoLi.appendChild(boton2)
  boton2.innerHTML= "Ready";
  nuevoLi.classList.add("tarjeta");

  nuevoLi.setAttribute("style", `background: ${valorInput}`)

  
}

