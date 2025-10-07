import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-list',
  standalone: true ,
  templateUrl: './counter-list.html',
  styleUrl: './counter-list.css'
})
export class CounterList {
  count = signal(0);
  items = signal([
    { id: 1, name: "Angular" },
    { id: 2, name: "Signals" },
  ]);

  increment() {
    this.count.update((c: number) => c + 1);
  }
}
