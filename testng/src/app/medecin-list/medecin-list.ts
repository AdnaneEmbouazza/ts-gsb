import { Component , input } from '@angular/core';
import { DOCTORS } from '../constante/doctors';

@Component({
  selector: 'app-medecin-list',
  imports: [],
  templateUrl: './medecin-list.html',
  styleUrl: './medecin-list.css'
})
export class MedecinList {
  medecins = DOCTORS ;

  medecins = input.require<array>();
}
