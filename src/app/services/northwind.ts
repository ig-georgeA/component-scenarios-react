import { CategoriesType } from '../models/Northwind/categories-type';
import { EmployeesType } from '../models/Northwind/employees-type';

export async function getCategories(): Promise<CategoriesType[]> {
  const response = await fetch('../../static-data/northwind-categories-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getEmployees(): Promise<EmployeesType[]> {
  const response = await fetch('../../static-data/northwind-employees-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
