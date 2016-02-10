import {Messages, Constants} from "./../core/core.module";

export class MainController {
  greeting: string;
  constant: string;

  constructor() {
    var messages = new Messages();
    this.greeting = messages.main;
    let constants = new Constants();
    this.constant = constants.main;
  }

}