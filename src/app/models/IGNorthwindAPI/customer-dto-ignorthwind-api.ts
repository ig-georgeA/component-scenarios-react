import { AddressDtoIGNorthwindAPI } from './address-dto-ignorthwind-api';

export interface CustomerDtoIGNorthwindAPI {
  customerId: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: AddressDtoIGNorthwindAPI;
}
