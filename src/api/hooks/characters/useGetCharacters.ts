import useAxios from 'axios-hooks';
import { Endpoint } from '../../../constants/endpoints';
import { baseUrl } from '../../apiClient';

export const useGetCharacters = (searchValue: string) => {
  const endpoint = baseUrl + Endpoint.CHARACTER;
  const [{ data, loading }] = useAxios(
    searchValue.length > 2 ? endpoint + '/?name=' + searchValue : endpoint
  );
  return { data, loading };
};
