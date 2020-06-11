export class Voiture {
    constructor(
        public id: number,
        public marque: string,
        public immatriculation: string,
        public siege: number,
        public couleur: string,
        public image: string
    ) {}    
}
export const Voitures: Voiture[] = [
    { id: 1 ,marque:"bmw" ,immatriculation:'123b',siege:3,couleur:'black',image:"bmw.jpg"},
    { id: 2, marque: 'mercedes',immatriculation:'456b',siege:6,couleur:'bleu',image:"mercedes.jpg"},
    { id: 3, marque: 'ferrari', immatriculation:'789b',siege:1,couleur:'rouge',image:"ferrari.jpg" }
  
    
];