import { Injectable } from '@angular/core';
import { Voitures } from '../voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor() { }
  getvoitures() {
    return Voitures;
}
}
