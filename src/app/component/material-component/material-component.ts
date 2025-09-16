import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import {  MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-material-component',
  imports: [MatCardModule,MatButtonModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, 
            MatFormFieldModule, FormsModule, MatButtonToggleModule, MatBadgeModule, MatIconModule],
  templateUrl: 'material-component.html',
  styleUrl: './material-component.css'
})
export class MaterialComponent {
hidden: unknown;
 hiddenn = false;

  toggleBadgeVisibility() {
    this.hiddenn = !this.hiddenn;
  }
openLink($event: PointerEvent) {
throw new Error('Method not implemented.');
}

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
   @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input?.nativeElement?.value?.toLowerCase() ?? '';
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

   private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}
