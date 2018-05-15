import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const concesionarios = [
        {
            id: 1,
            nombre: 'Centro',
            telefono: 666666666,
            direccion: 'Alcala 245',
            provincia: 'Madrid',
            localidad: 'Madrid'
          },
          {
            id: 2,
            nombre: 'Otro',
            telefono: 632632632,
            direccion: 'Maria de la Hoz 245',
            provincia: 'Madrid',
            localidad: 'Alcala'
          },
          {
            id: 3,
            nombre: 'Lateral',
            telefono: 666666546,
            direccion: 'Rivas 245',
            provincia: 'Rivas',
            localidad: 'Madrid'
          },
          {
            id: 4,
            nombre: 'Mas arriba',
            telefono: 66666234,
            direccion: 'Mejorada 245',
            provincia: 'Mejorada',
            localidad: 'Mejorada'
          }
    ];
    return {concesionarios};
  }
}
