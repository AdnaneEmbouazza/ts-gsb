import { Component , signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,  // Sans NgModule  
  templateUrl: './counter.html', 
  styleUrls: ['./counter.css']
})
export class Counter {
  count = signal(0);

  increment(): void {
    this.count.update(c => c + 1);  
  }
}
