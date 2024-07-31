export interface Ticket {
    id: number;
    flightId: number;
    customerName: string;
    customerId: string;
    customerPhone: string;
    customerEmail: string;
    departure: string;
    landing: string;
    flightDate: Date;
    departureTime: number;
    landingTime: number;
  }
  