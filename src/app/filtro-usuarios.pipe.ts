import { Usuario } from './usuario';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuarios'
})
export class FiltroUsuariosPipe implements PipeTransform {

  transform(items: Usuario[], nombreUsuario: string): any[] {
    if (!items) {
      return [];
  }
    if (!nombreUsuario) {
      return items;
    }

    nombreUsuario = nombreUsuario.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(nombreUsuario);
    });
}
}
