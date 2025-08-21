import { Todo } from "./types"

const todos: Todo[] = [];

let currentId = 1;

function addTodo(title: string):Todo{
  const newTodo:Todo ={
    id:currentId++,
    title:title,
    completed:false
  };

  todos.push(newTodo);
  return newTodo;
}
const nuovoTodo = addTodo("imparare typescript :(");
console.log("Aggiunto nuovo todo:", nuovoTodo);
console.log("lista dei todos:",todos)

const sayHello = (name: string): void => {
  console.log(`Ciao, ${name}!`);
};

sayHello("TypeScript");

