import { useCallback, useEffect, useState } from 'react';
import { getStock, getStockDataList, getStockList } from '../services/fin-tech-api';
import { Stock } from '../models/FinTechAPI/stock';
import { StockData } from '../models/FinTechAPI/stock-data';

export const useGetStock = (symbol: any) => {
  const [stock, setStock] = useState<Stock | undefined>();

  const requestStock = useCallback(() => {
    let ignore = false;
    getStock(symbol)
      .then((data) => {
        if (!ignore) {
          setStock(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [symbol]);

  useEffect(() => {
    requestStock();
  }, [symbol, requestStock]);

  return { requestFinTechAPIStock: requestStock, finTechAPIStock: stock, setFinTechAPIStock: setStock };
}

export const useGetStockList = () => {
  const [stock, setStock] = useState<Stock[]>([]);

  const requestStock = useCallback(() => {
    let ignore = false;
    getStockList()
      .then((data) => {
        if (!ignore) {
          setStock(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestStock();
  }, [requestStock]);

  return { requestFinTechAPIStock: requestStock, finTechAPIStock: stock, setFinTechAPIStock: setStock };
}

export const useGetStockDataList = (symbol: any) => {
  const [stockData, setStockData] = useState<StockData[]>([]);

  const requestStockData = useCallback(() => {
    let ignore = false;
    getStockDataList(symbol)
      .then((data) => {
        if (!ignore) {
          setStockData(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [symbol]);

  useEffect(() => {
    requestStockData();
  }, [symbol, requestStockData]);

  return { requestFinTechAPIStockData: requestStockData, finTechAPIStockData: stockData, setFinTechAPIStockData: setStockData };
}
