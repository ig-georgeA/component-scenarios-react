import { CustomerDtoIGNorthwindAPI } from './customer-dto-ignorthwind-api';

export interface CustomerDtoPagedResultDto {
  items: CustomerDtoIGNorthwindAPI[];
  totalRecordsCount: number;
  pageSize: number;
  pageNumber: number;
  totalPages: number;
}
