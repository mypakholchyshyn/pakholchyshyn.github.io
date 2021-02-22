const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/*let todos = [{id: 991 , text: "task1" , check:true },{id: 992 , text: "task2" , check:true },{id: 993 , text: "task3" , check:true }];
if(todos.length != 0){
  render ();
}
let id = 0; */
let todos = [];

let id=todos.length;
//<li>
//    <input type="checkbox">
//    <button>delete</button>
//    <span>text</span>
//</li>

class Todo{
  constructor(){
    this.id = ++id;
    this.chek = false;
    this.text = this.getText();
  }
  getText(){
    return prompt('Enter a todo task:')
  }
}

function newTodo() {
  
  const todo = new Todo();
  
  todos.push(todo);
  
  render();
  
}

function render(){
  list.innerHTML = '';
  todos.map(createTodo).forEach(todo => list.appendChild(todo))
  // update counts 
  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;
}

function createTodo(todo){
  // create li
  const li = document.createElement('li');
  
  // create input checkbox
  // create button
  // create span
  li.innerHTML = `
  <input type="checkbox" onchange="changeTodo(${todo.id})"${todo.check ? "checked" : ""}>
  <button onclick = "deleteTodo(${todo.id})">delete</button>
  <span>${todo.text}</span>
  `
  return li;
  

}

function deleteTodo(id){
  todos = todos.filter(todo => todo.id !== id);
  render();
 

}

function changeTodo(id){
 // for(let i=0; i<todos.length; i++){
 //   if(todos[i].id === id){
 //     todos[i].check = !todos[i].check;
 //     break;
 //   }
 // }

 todos = todos.map(todo => todo.id == id ? {id:todo.id, text: todo.text, check:!todo.chek} :todo);
 
 //todos = todos.map(todo => todo.id == id ? {...todo, check:!todo.chek} :todo);
  

  uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;
}
