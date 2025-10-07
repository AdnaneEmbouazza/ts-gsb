import { Component , input} from '@angular/core';

@Component({
  selector: 'app-parent-img',

  templateUrl: './parent-img.html',
  styleUrl: './parent-img.css'
})
export class ParentImg {
  img_src = input.required<string>();
}
