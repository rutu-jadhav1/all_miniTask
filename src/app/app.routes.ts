import { Routes } from '@angular/router';
import { TodoAppComponent } from './component/todo-app-component/todo-app-component';
import { CounterComponent } from './component/counter-component/counter-component';
import { NavbarComponent } from './component/navbar-component/navbar-component';
import { StudentListComponent } from './component/student-list-component/student-list-component';
import { MaterialComponent } from './component/material-component/material-component';
import { MaterialComponent2 } from './component/material-component2/material-component2';
import { MaterialComponent3 } from './component/material-component3/material-component3';

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
                    },
                    {
                        path: 'materialComponent',
                        component: MaterialComponent
                    },
                    {
                        path:'materialComponent2',
                        component: MaterialComponent2
                    },
                    {
                        path:'materialComponent3',
                        component: MaterialComponent3
                    }
                ]
    }
];
