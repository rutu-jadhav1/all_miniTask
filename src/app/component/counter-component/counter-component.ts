import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [CommonModule],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent {
  count: number = 0;
  maxLimit: number = 20;

  increment() {
    if (this.count < this.maxLimit) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }
  reachedLimit(): boolean {
    return this.count === this.maxLimit;
  }
}