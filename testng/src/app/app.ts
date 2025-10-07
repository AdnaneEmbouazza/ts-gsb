import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { CounterList} from './counter-list/counter-list';
import { Img } from './img/img';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Counter , CounterList , Img],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testng');
}
