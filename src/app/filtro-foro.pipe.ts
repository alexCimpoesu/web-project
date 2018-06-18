import { Topic } from './topic';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroForo'
})
export class FiltroForoPipe implements PipeTransform {

  transform(items: Topic[], nombreTopic: string): any[] {
    if (!items) {
      return [];
  }
    if (!nombreTopic) {
      return items;
    }

    nombreTopic = nombreTopic.toLowerCase();
    return items.filter( it => {
      return it.titulo.toLowerCase().includes(nombreTopic);
    });
}
}
