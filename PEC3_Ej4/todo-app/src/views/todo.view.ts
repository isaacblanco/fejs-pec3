import { Todo } from "../models/todo.model";
/**
 * @class View
 *
 * Visual representation of the model.
 */
export class TodoView {
  private app: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private todoList: HTMLElement;
  private _temporaryTodoText: string;

  constructor() {
    this.app = this.getElement("#root")!;
    this.form = this.createElement("form") as HTMLFormElement;
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button") as HTMLButtonElement;
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1") as HTMLHeadingElement;
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);
    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  private createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }
  private getElement(selector: string): HTMLElement {
    const element = document.querySelector(selector);
    if (!element) throw new Error(`Element not found: ${selector}`);
    return element as HTMLElement;
  }

  displayTodos(todos: Todo[]): void {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.appendChild(p);
    } else {
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = "true"; // Corregido a string

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        this.todoList.appendChild(li);
      });
    }
  }

  private _initLocalListeners(): void {
    this.todoList.addEventListener("input", (event) => {
      const target = event.target as HTMLElement; // Asegura que el target es tratado como HTMLElement.
      if (target && target.className === "editable") {
        this._temporaryTodoText = target.innerText;
      }
    });
  }

  bindAddTodo(handler: (todoText: string) => void): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this.input.value) {
        handler(this.input.value);
        this._resetInput();
      }
    });
  }

  private _resetInput(): void {
    this.input.value = "";
  }

  bindEditTodo(handler: (id: string, todoText: string) => void): void {
    this.todoList.addEventListener("focusout", (event) => {
      if (this._temporaryTodoText) {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  bindDeleteTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("click", (event) => {
      if ((event.target as HTMLElement).className === "delete") {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id);
      }
    });
  }

  bindToggleTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("change", (event) => {
      if ((event.target as HTMLInputElement).type === "checkbox") {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id);
      }
    });
  }
}
