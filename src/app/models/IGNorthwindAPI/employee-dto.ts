import { AddressDtoIGNorthwindAPI } from './address-dto-ignorthwind-api';

export interface EmployeeDto {
  employeeId: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: Date;
  hireDate: Date;
  addressId: string;
  address: AddressDtoIGNorthwindAPI;
  notes: string;
  avatarUrl: string;
  reportsTo: number;
}
