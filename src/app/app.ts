import { Component } from '@angular/core';
import { TodoAppComponent } from "./component/todo-app-component/todo-app-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodoAppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'all_miniTask';
}
