import { AddressDtoIGNorthwindAPI } from './address-dto-ignorthwind-api';

export interface OrderDto {
  orderId: number;
  customerId: string;
  employeeId: number;
  shipperId: number;
  orderDate: Date;
  requiredDate: Date;
  shipVia: string;
  freight: number;
  shipName: string;
  completed: boolean;
  shipAddress: AddressDtoIGNorthwindAPI;
}
