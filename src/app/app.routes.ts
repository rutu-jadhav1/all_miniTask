import { Routes } from '@angular/router';
import { TodoAppComponent } from './component/todo-app-component/todo-app-component';
import { CounterComponent } from './component/counter-component/counter-component';
import { NavbarComponent } from './component/navbar-component/navbar-component';
import { StudentListComponent } from './component/student-list-component/student-list-component';

export const routes: Routes = [

     {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: '',
        component: NavbarComponent,
        children: [
                    {
                        path: 'todo',
                        component: TodoAppComponent
                    },
                    {
                        path: 'counter',
                        component: CounterComponent
                    }, 
                    {
                        path: 'studentList',
                        component: StudentListComponent
                    }
                ]
    }
];
