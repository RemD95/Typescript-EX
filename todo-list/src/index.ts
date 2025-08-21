import { Todo } from "./types"
import type User = require("./types");

const todos: Todo[] = [];

let currentId = 1;

function addTodo(title: string): Todo {
  const newTodo: Todo = {
    id: currentId++,
    title: title,
    completed: false
  };

  todos.push(newTodo);
  return newTodo;
}
const nuovoTodo = addTodo("imparare typescript :(");
console.log("Aggiunto nuovo todo:", nuovoTodo);
console.log("lista dei todos:", todos)

function assignTodoToUser(userId: number, todoId: number): boolean {
  const todo = todos.find(todo => todo.id === todoId);

  if(!todo){
    console.log(`Todo con ID ${todoId} non trovato.`)
    return false ;
  }
}

const sayHello = (name: string): void => {
  console.log(`Ciao, ${name}!`);
};

sayHello("TypeScript");

