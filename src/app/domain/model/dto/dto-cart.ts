import { DtoRoom } from './dto-room';

export interface DtoOrder {
  userId: number;
  date: Date;
  rooms: DtoRoom[];
}
