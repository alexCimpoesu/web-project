import { Concesionario } from './concesionario';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroConcesionarios'
})
export class FiltroConcesionariosPipe implements PipeTransform {

  transform(items: Concesionario[], nombreConcesionario: string): any[] {
    if (!items) {
      return [];
  }
    if (!nombreConcesionario) {
      return items;
    }

    nombreConcesionario = nombreConcesionario.toLowerCase();
    return items.filter( it => {
      return it.nombre.toLowerCase().includes(nombreConcesionario);
    });
}
}
