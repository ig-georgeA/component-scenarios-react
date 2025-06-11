import { useCallback, useEffect, useState } from 'react';
import { CustomerDtoIGNorthwindAPI } from '../models/IGNorthwindAPI/customer-dto-ignorthwind-api';
import { CustomerDtoPagedResultDto } from '../models/IGNorthwindAPI/customer-dto-paged-result-dto';
import { deleteCustomerDto, getCustomerDto, getCustomerDtoList, getCustomerDtoPagedResultDto, getEmployeeDtoList, getOrderDetailDtoList, getOrderDtoList, postCustomerDto } from '../services/ignorthwind-api';
import { EmployeeDto } from '../models/IGNorthwindAPI/employee-dto';
import { OrderDetailDto } from '../models/IGNorthwindAPI/order-detail-dto';
import { OrderDto } from '../models/IGNorthwindAPI/order-dto';

export const useGetCustomerDtoPagedResultDto = (pageIndex: any, size: any, orderBy: any) => {
  const [customerDtoPagedResultDto, setCustomerDtoPagedResultDto] = useState<CustomerDtoPagedResultDto | undefined>();

  const requestCustomerDtoPagedResultDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoPagedResultDto(pageIndex, size, orderBy)
      .then((data) => {
        if (!ignore) {
          setCustomerDtoPagedResultDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [pageIndex, size, orderBy]);

  useEffect(() => {
    requestCustomerDtoPagedResultDto();
  }, [pageIndex, size, orderBy, requestCustomerDtoPagedResultDto]);

  return { requestIGNorthwindAPICustomerDtoPagedResultDto: requestCustomerDtoPagedResultDto, iGNorthwindAPICustomerDtoPagedResultDto: customerDtoPagedResultDto, setIGNorthwindAPICustomerDtoPagedResultDto: setCustomerDtoPagedResultDto };
}

export const useGetCustomerDto = (id: any) => {
  const [customerDto, setCustomerDto] = useState<CustomerDtoIGNorthwindAPI | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    getCustomerDto(id)
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestCustomerDto();
  }, [id, requestCustomerDto]);

  return { requestIGNorthwindAPICustomerDto: requestCustomerDto, iGNorthwindAPICustomerDto: customerDto, setIGNorthwindAPICustomerDto: setCustomerDto };
}

export const useDeleteCustomerDto = (id: any) => {
  const [customerDto, setCustomerDto] = useState<CustomerDtoIGNorthwindAPI | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    deleteCustomerDto(id)
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestCustomerDto();
  }, [id, requestCustomerDto]);

  return { requestIGNorthwindAPICustomerDto: requestCustomerDto, iGNorthwindAPICustomerDto: customerDto, setIGNorthwindAPICustomerDto: setCustomerDto };
}

export const usePostCustomerDto = () => {
  const [customerDto, setCustomerDto] = useState<CustomerDtoIGNorthwindAPI | undefined>();

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    postCustomerDto()
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomerDto();
  }, [requestCustomerDto]);

  return { requestIGNorthwindAPICustomerDto: requestCustomerDto, iGNorthwindAPICustomerDto: customerDto, setIGNorthwindAPICustomerDto: setCustomerDto };
}

export const useGetCustomerDtoList = () => {
  const [customerDto, setCustomerDto] = useState<CustomerDtoIGNorthwindAPI[]>([]);

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoList()
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomerDto();
  }, [requestCustomerDto]);

  return { requestIGNorthwindAPICustomerDto: requestCustomerDto, iGNorthwindAPICustomerDto: customerDto, setIGNorthwindAPICustomerDto: setCustomerDto };
}

export const useGetOrderDtoList = (id: any) => {
  const [orderDto, setOrderDto] = useState<OrderDto[]>([]);

  const requestOrderDto = useCallback(() => {
    let ignore = false;
    getOrderDtoList(id)
      .then((data) => {
        if (!ignore) {
          setOrderDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestOrderDto();
  }, [id, requestOrderDto]);

  return { requestIGNorthwindAPIOrderDto: requestOrderDto, iGNorthwindAPIOrderDto: orderDto, setIGNorthwindAPIOrderDto: setOrderDto };
}

export const useGetOrderDetailDtoList = (id: any) => {
  const [orderDetailDto, setOrderDetailDto] = useState<OrderDetailDto[]>([]);

  const requestOrderDetailDto = useCallback(() => {
    let ignore = false;
    getOrderDetailDtoList(id)
      .then((data) => {
        if (!ignore) {
          setOrderDetailDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [id]);

  useEffect(() => {
    requestOrderDetailDto();
  }, [id, requestOrderDetailDto]);

  return { requestIGNorthwindAPIOrderDetailDto: requestOrderDetailDto, iGNorthwindAPIOrderDetailDto: orderDetailDto, setIGNorthwindAPIOrderDetailDto: setOrderDetailDto };
}

export const useGetEmployeeDtoList = () => {
  const [employeeDto, setEmployeeDto] = useState<EmployeeDto[]>([]);

  const requestEmployeeDto = useCallback(() => {
    let ignore = false;
    getEmployeeDtoList()
      .then((data) => {
        if (!ignore) {
          setEmployeeDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployeeDto();
  }, [requestEmployeeDto]);

  return { requestIGNorthwindAPIEmployeeDto: requestEmployeeDto, iGNorthwindAPIEmployeeDto: employeeDto, setIGNorthwindAPIEmployeeDto: setEmployeeDto };
}
