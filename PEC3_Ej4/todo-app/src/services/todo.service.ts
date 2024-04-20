import { Todo } from "../models/todo.model";

export class TodoService {
  todos: Todo[];
  onTodoListChanged!: (todos: Todo[]) => void;

  constructor() {
    const todosData = localStorage.getItem("todos") || "[]"; // Asegura que nunca será null
    this.todos = JSON.parse(todosData).map(
      (todoData: any) => new Todo(todoData.text, todoData.complete)
    );
  }
  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo(text));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? new Todo(updatedText, todo.complete) : todo
    );
    this._commit(this.todos);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._commit(this.todos);
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? new Todo(todo.text, !todo.complete) : todo
    );
    this._commit(this.todos);
  }
}
