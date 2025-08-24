export interface Todo {
    id: number;
    userId?: number
    title: string;
    completed: boolean;
}
 
interface TodoWithMetadata extends Todo {
    metadata?: any;
}

export interface User {
    id: number;
    name: string;
    email: string;
}