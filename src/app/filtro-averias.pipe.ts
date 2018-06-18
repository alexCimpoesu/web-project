import { Averia } from './averia';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAverias'
})
export class FiltroAveriasPipe implements PipeTransform {

  transform(items: Averia[], nombreAveria: string): any[] {
    if (!items) {
      return [];
  }
    if (!nombreAveria) {
      return items;
    }

    nombreAveria = nombreAveria.toLowerCase();
    return items.filter( it => {
      return it.nombre.toLowerCase().includes(nombreAveria);
    });
}
}
