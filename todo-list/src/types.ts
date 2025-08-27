export interface Todo {
    id: number;
    userId?: number
    title: string;
    completed: boolean;
    metadata?: any,
}

interface TodoWithMetadata extends Todo {
    metadata?: any;
}

export interface User {
    id: number;
    name: string;
    email: string;
    readonly: Todo[];
}

export interface Project {
    users: User[];
    todos: Todo[];
}