import { Flight } from './flight';

export interface Booking {
  flight: Flight;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}
