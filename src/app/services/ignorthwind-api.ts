import { CustomerDtoIGNorthwindAPI } from '../models/IGNorthwindAPI/customer-dto-ignorthwind-api';
import { CustomerDtoPagedResultDto } from '../models/IGNorthwindAPI/customer-dto-paged-result-dto';
import { EmployeeDto } from '../models/IGNorthwindAPI/employee-dto';
import { FetchApi } from './fetch-api';
import { OrderDetailDto } from '../models/IGNorthwindAPI/order-detail-dto';
import { OrderDto } from '../models/IGNorthwindAPI/order-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoPagedResultDto(pageIndex: number, size: number, orderBy: string): Promise<CustomerDtoPagedResultDto | undefined> {
  const query = new URLSearchParams({
    'pageIndex': `${pageIndex}`,
    'size': `${size}`,
    'orderBy': orderBy });
  return await FetchApi.fetchApiResponse<CustomerDtoPagedResultDto | undefined>(`${API_ENDPOINT}/Customers/GetCustomersWithPage?${query}`, undefined);
}

export async function getCustomerDto(id: string = 'ALFKI'): Promise<CustomerDtoIGNorthwindAPI | undefined> {
  if (!id) {
    return Promise.resolve(undefined);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDtoIGNorthwindAPI | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'GET', undefined, headers);
}

export async function deleteCustomerDto(id: string): Promise<CustomerDtoIGNorthwindAPI | undefined> {
  if (!id) {
    return Promise.resolve(undefined);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDtoIGNorthwindAPI | undefined>(`${API_ENDPOINT}/Customers/${id}`, undefined, 'DELETE', undefined, headers);
}

export async function postCustomerDto(): Promise<CustomerDtoIGNorthwindAPI | undefined> {
  const body = `{
    customerId: 'string',
    companyName: 'string',
    contactName: 'string',
    contactTitle: 'string',
    address: {
      street: 'string',
      city: 'string',
      region: 'string',
      postalCode: 'string',
      country: 'string',
      phone: 'string'
    }
  }`;
  const headers = {
    Authorization: 'Bearer <auth_value>',
    'Content-Type': 'application/json; charset=utf-8'
  };
  return await FetchApi.fetchApiResponse<CustomerDtoIGNorthwindAPI | undefined>(`${API_ENDPOINT}/Customers`, undefined, 'POST', body, headers);
}

export async function getCustomerDtoList(): Promise<CustomerDtoIGNorthwindAPI[]> {
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDtoIGNorthwindAPI[]>(`${API_ENDPOINT}/Customers`, [], 'GET', undefined, headers);
}

export async function getOrderDtoList(id: string = 'ALFKI'): Promise<OrderDto[]> {
  if (!id) {
    return Promise.resolve([]);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDto[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, [], 'GET', undefined, headers);
}

export async function getOrderDetailDtoList(id: number = 10248): Promise<OrderDetailDto[]> {
  if (!id) {
    return Promise.resolve([]);
  }
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, [], 'GET', undefined, headers);
}

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, [], 'GET', undefined, headers);
}
