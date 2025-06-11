import { useCallback, useEffect, useState } from 'react';
import { getNestedData } from '../services/nested-data-repeat';
import { NestedDataType } from '../models/NestedDataRepeat/nested-data-type';

export const useGetNestedData = () => {
  const [nestedData, setNestedData] = useState<NestedDataType | undefined>();

  const requestNestedData = useCallback(() => {
    let ignore = false;
    getNestedData()
      .then((data) => {
        if (!ignore) {
          setNestedData(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestNestedData();
  }, [requestNestedData]);

  return { requestNestedDataRepeatNestedData: requestNestedData, nestedDataRepeatNestedData: nestedData, setNestedDataRepeatNestedData: setNestedData };
}
