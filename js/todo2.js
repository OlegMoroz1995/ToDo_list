'use strict';
//selecting dom elements for manipulation
const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");
const container = document.querySelector("div");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const pencil = document.querySelector("#pencil");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const tipsBtn = document.querySelector(".tipBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.getElementById("overlay");


//function to delete todo if delete span is clicked.
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click", function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//function to load todo if list is found in local storage.
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//event listener for input to add new todo to the list.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //creating lists and span when enter is clicked
    const li = document.createElement("li");
    const spanElement = document.createElement("span");
    const icon = document.createElement("i");
        
    const newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();
    
    }
    
});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//hide input box,when pencil icon is clicked
pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});



//save todolist state so user can access it later
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//display overlay when tips btn is clicked
tipsBtn.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//close overlay when close btn is clicked
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";
  
})

//delete todo
deleteTodo();

//load Todo
loadTodo();