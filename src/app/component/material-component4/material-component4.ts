import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-material-component4',
  providers: [provideNativeDateAdapter()],
  imports: [MatTableModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatTimepickerModule,ReactiveFormsModule,
            MatToolbarModule,MatButtonModule,MatIconModule,MatSelectModule,FormsModule,MatTooltipModule,MatFormFieldModule,
            MatTreeModule, ],
  templateUrl: './material-component4.html',
  styleUrl: './material-component4.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent4 {
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableDataSource = ELEMENT_DATA;

  formControl: FormControl<Date | null>;
  dataSource: FoodNode[] | DataSource<FoodNode> | Observable<FoodNode[]> = [];
  constructor() {
    const initialValue = new Date();
    initialValue.setHours(12, 30, 0);
    this.formControl = new FormControl(initialValue);
  }

   positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);


  childrenAccessor = (node: FoodNode) => node.children ?? [];

  treeDataSource = EXAMPLE_DATA;

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];