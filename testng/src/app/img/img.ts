import { Component } from '@angular/core';
import { ParentImg } from '../parent-img/parent-img';

@Component({
  selector: 'app-img',
  imports :[ParentImg],
  standalone: true ,
  templateUrl: './img.html',
  styleUrl:'./img.css'
})
export class Img {
  img = 'ecureuil.jpg';

  getImg() : string {
    return this.img ;
  }
}
