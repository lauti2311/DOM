console.log(document);

//Instancias de elementos
//console.log(document) //Ver todo lo que contiene el document
//console.log(document.getElementById("cabecera")) //Ver por id
//console.log(document.getElementsByClassName("border-grey")) //Ver por clase
//console.log(document.getElementsByTagName("li")) //Ver por tag, un listado
//console.log(document.getElementsByTagName("li")) //Ver por nombre
//console.log(document.querySelector("li"))//Ve por query 1 a 1
//console.log(document.querySelectorAll("li"))//Ve por query todos
//console.log(document.querySelectorAll(".border-grey"))//Ve por query todas las clases
//console.log(document.querySelector("#header"))//Ve por query todos por id
//console.log(document.querySelectorAll("[name=nombre]"))//Ve por query name
//const elemento = document.getElementById("header")
// const lista1 = document.getElementsByClassName("border-grey") //listado de html collections, dinamica
// const lista2 = document.querySelectorAll(".border-grey") // Node list estatica

//CREAR ELEMENTOS

// const titulo2= document.createElement('h2') //Crea un titulo h2
// const textoTitulo2 = document.createTextNode("Nuevo titulo creado") // Crea un texto
// const comentario = document.createComment('Comentario') //crea un comentario

//Clonar

// const articulo = document.querySelector('article');

// articulo.cloneNode()//Clone con (true) copia en profundidad el nodo

//const articulo2 = articulo.cloneNode(true); //Clona TODO el articulo
// const section = document.getElementById("section");
// section.insertAdjacentText('beforeend','Aqui acaba la seccion') // Se agrega un texto adyacente dependiendo si le ponemos before, o after.
// section.insertAdjacentHTML('beforeend', '<h3>Esto es un titulo</h3>') // Agrega una etiqueta html adyacente, h3,h2, etc.
// section.remove() // remueve la seccion completa
// section.innerHTML('<h2>Nuevo Titulo de la seccion</h2>')//reemplaza la seccion
// section.outerHTML()//Reemplaza toda la seccion
// section.children[0].textContent='Otro titulo' //Sustituye el titulo del h2
// section.getAttribute('id') //Trae la id de la seccion, si tenemos nombre= tambien se puede poner el nombre
// section.setAttribute('nombre', 'otrovalor') //Cambia el nombre por el de otrovalor
// section.classList // se ven las clases
// section.className // se ve el string de la clase
// section.className += 'nuevaClasecss' // Se le agrega al string de la clase
// section.classList.add('nuevaClase')
// section.classList.remove('nuevaClase')
// section.classList.toggle('nuevaClase') //Si existe la clase la quita, sino lo pone
// section.appendChild(articulo2) //agrega el articulo 2 que todavia no se ve reflejado en la pagina
// section.insertAdjacentElement('beforebegin', articulo2) 
// section.insertAdjacentElement('afterbegin', articulo2) 
// section.insertAdjacentElement('beforeend', articulo2) 
// section.insertAdjacentElement('afterend', articulo2) 

//EVENTOS

//Listeners

// function clickTitulo(){ //Funcion que cuando se clickea el titulo se muestra el mensaje. NO SE USA ASI PORQUE ES UNA MALA PRACTICA AL COMBINAR HTML Y JS EN EL MISMO LUGAR.
//     console.log("El usuario hizo click en el titulo");
// }

// const clickTitulo = (ev)=>{ 
//     console.log(ev);
// } //evento

// const titulo2 = document.getElementById("tituloForm");

//titulo2.onclick = clickTitulo; // se llama a la funcion y se muestra el mensaje con la accion sin tocar el html

// titulo2.addEventListener("click", clickTitulo); // la mas recomendada

// titulo2.removeEventListener("click", clickTitulo) // se elimina

//Eventos

// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log("El documento se ha largado") //Muestra el mensaje cuando se carga SOLO el html/se recarga la pagina
// })

//Submit y eliminar comportamiento nativo

const form = document.querySelector("#formulario");
const enviarFormulario = (event) =>{
    event.preventDefault(); //Se controla el comportamiento el evento default del navegador
    const{name, email,password} = event.target; //L
    console.log(event); // para ver todo
    console.log(
        name.value,
        email.value,
        password.value) // ver cada uno de los valores que se indican
        if (name.value.length === 0) alert("el nombre no es valido");
    }
form.addEventListener('submit', enviarFormulario);

//Event bubbling

// const form = document.querySelector("#formulario");
// const enviarFormulario = (event) =>{

//     }

form.addEventListener("submit", enviarFormulario);


const section = document.querySelector("#seccion");
const titulo2 = document.querySelector("#titulo2");

// titulo2.addEventListener("click", (event) =>  {
//     console.log(event.bubbles, event.cancelBubble);
//     event.stopPropagation();
//     console.log(event.bubbles, event.cancelBubble);
//     console.log("CLICK EN EL TITULO")

// }) //Al clickear en el titulo muestra que se clickeo la seccion y titulo
// section.addEventListener("click", () => {
//     console.log("click en la seccion")
// }) //Al clickear en la seccion muestra que se clickeo ahi.

//const section = document.querySelector("#seccion");

// section.addEventListener("click", (event) => {
//         console.log(event.target, event.currentTarget) //Veo el titulo especificamente clickeo
//     })   

section.addEventListener("click", (event) => {
        console.log("Click en seccion")
    },
    {

    });   