import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-app-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-app-component.html',
  styleUrl: './todo-app-component.css'
})
export class TodoAppComponent {
 todos: Todo[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      title: this.newTask,
      completed: false
    };

    this.todos.push(newTodo);
    this.newTask = ''; 
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}