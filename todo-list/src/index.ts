import type { Todo } from "./types.js"
import type User = require("./types");

const todos: Todo[] = [];

let currentId = 1;

function addTodo(title: string, metadata?: any): Todo {
  const newTodo: Todo = {
    id: currentId++,
    title: title,
    completed: false,
    metadata: metadata,
  };

  todos.push(newTodo);
  return newTodo;
}
const nuovoTodo = addTodo("imparare typescript :(");
console.log("Aggiunto nuovo todo:", nuovoTodo);
console.log("lista dei todos:", todos)

function assignTodoToUser(userId: number, todoId: number): boolean {
  const todo = todos.find(todo => todo.id === todoId);

  if (!todo) {
    console.log(`Todo con ID ${todoId} non trovato.`)
    return false;
  };

  todo.userId = userId;
  return true;
}

const sportTodo = addTodo("Fare più sport");
assignTodoToUser(sportTodo.id, 99);

console.log("Todo assegnato:", sportTodo)

const todo1 = addTodo("Andare al mare");
assignTodoToUser(todo1.id, 1)

function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
};

console.log(getUserTodos(1));

function error(message: string): never {
  throw new Error(message);
};

function parseInput(input: unknown): string {
  if (typeof input === "string") {
    return input;
  }

  if (typeof input === "number") {
    return input.toString();
  }

  return error("Unknown input-type");
};

console.log(parseInput(false));









const sayHello = (name: string): void => {
  console.log(`Ciao, ${name}!`);
};

sayHello("TypeScript");

