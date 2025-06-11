import { FetchApi } from './fetch-api';
import { NestedDataType } from '../models/NestedDataRepeat/nested-data-type';

export async function getNestedData(): Promise<NestedDataType | undefined> {
  return await FetchApi.fetchApiResponse<NestedDataType | undefined>('https://raw.githubusercontent.com/zdrawku/data/master/IGDSC-Library.json', undefined);
}
