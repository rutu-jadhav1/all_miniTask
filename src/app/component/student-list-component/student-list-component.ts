import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  id: number;
  name: string;
  course: string;
}

@Component({
  selector: 'app-student-list-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css'
})
export class StudentListComponent {
 students: Student[] = [ 
    { id: 1, name: 'Nisargraj ', course: 'Engineering' }];

  newName: string = '';
  newCourse: string = '';
  private nextId: number = 2;

  addStudent() {
    if (this.newName.trim() && this.newCourse.trim()) {
      this.students.push({
        id: this.nextId++,
        name: this.newName,
        course: this.newCourse
      });
      this.newName = '';
      this.newCourse = '';
    }
  }
   deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
