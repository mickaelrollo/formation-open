import { Directive } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DtoOrder } from '../model/dto/dto-cart';

@Directive()
export class OrderService {
  getWeekCart(): Observable<DtoOrder[]> {
    const data: DtoOrder[] = [
      {
        userId: 1,
        date: new Date('2025-06-01'),
        rooms: [
          {
            id: 1,
            breakfast: false,
            peopleNumber: 2,
          },
        ],
      },
      {
        userId: 1,
        date: new Date('2025-06-02'),
        rooms: [
          {
            id: 2,
            breakfast: true,
            peopleNumber: 2,
          },
          {
            id: 3,
            breakfast: true,
            peopleNumber: 4,
          },
        ],
      },
    ];

    return of(data).pipe(delay(200));
  }
}
