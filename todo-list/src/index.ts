import { Todo } from "./types"

const todos: Todo[] = [];
console.log("lista dei todos:",todos)

const sayHello = (name: string): void => {
  console.log(`Ciao, ${name}!`);
};

sayHello("TypeScript");

