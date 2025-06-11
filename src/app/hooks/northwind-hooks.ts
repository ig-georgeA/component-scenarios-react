import { useCallback, useEffect, useState } from 'react';
import { CategoriesType } from '../models/Northwind/categories-type';
import { EmployeesType } from '../models/Northwind/employees-type';
import { getCategories, getEmployees } from '../services/northwind';

export const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const requestCategories = useCallback(() => {
    let ignore = false;
    getCategories()
      .then((data) => {
        if (!ignore) {
          setCategories(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCategories();
  }, [requestCategories]);

  return { requestNorthwindCategories: requestCategories, northwindCategories: categories, setNorthwindCategories: setCategories };
}

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<EmployeesType[]>([]);

  const requestEmployees = useCallback(() => {
    let ignore = false;
    getEmployees()
      .then((data) => {
        if (!ignore) {
          setEmployees(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployees();
  }, [requestEmployees]);

  return { requestNorthwindEmployees: requestEmployees, northwindEmployees: employees, setNorthwindEmployees: setEmployees };
}
