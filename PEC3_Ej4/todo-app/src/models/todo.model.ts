/**
 * @class Model
 *
 * Manages the data of the application.
 */

interface ITodo {
  id: string;
  text: string;
  complete: boolean;
  uuidv4(): string;
}

export class Todo implements ITodo {
  id: string;
  text: string;
  complete: boolean;

  constructor(text: string, complete: boolean = false) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
