import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../voiture';
@Pipe({
    
    name: 'selectedVoiture'
})
export class SelectedVoiturePipe implements PipeTransform {
    transform(allVoitures: Voiture[], id: number): any {
        return allVoitures.filter(p => p.id === id);
    }
}