import { Directive } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Directive()
export class UserService {
  getUsers(): Observable<DtoUser[]> {
    const datas: DtoUser[] = [
      {
        id: 1,
        name: 'Prof',
        titre: 'Chef autoproclamé du groupe',
        age: 20,
      },
      {
        id: 2,
        name: 'Joyeux',
        titre: 'Toujours gai et optimiste',
        age: 20,
      },
      {
        id: 3,
        name: 'Grincheux',
        titre: 'Le râleur de la bande',
        age: 20,
      },
      {
        id: 4,
        name: 'Dormeur',
        titre: 'Très paresseux',
        age: 20,
      },
      {
        id: 5,
        name: 'Timide',
        titre: 'Très... timide',
        age: 20,
      },
      {
        id: 6,
        name: 'Atchoum',
        titre: 'Perpétuellement embêté par son rhume des foins',
        age: 20,
      },
      {
        id: 7,
        name: 'Simplet',
        titre: 'Le nain muet.',
        age: 20,
      },
    ];
    return of(datas).pipe(delay(200));
  }
}
