import useAxios from 'axios-hooks';
import { baseUrl, Endpoint } from '../../../constants/endpoints';
import { CharactersResponse } from './types';

export const useGetCharacters = (
  searchValue: string,
  paginationUrl: string | null
): {
  data: CharactersResponse | undefined;
  loading: boolean;
} => {
  const [{ data, loading }] = useAxios<CharactersResponse>(
    paginationUrl ? paginationUrl : configureUrl(searchValue)
  );
  return { data, loading };
};

function configureUrl(searchValue: string) {
  const endpoint = baseUrl + Endpoint.CHARACTER;

  return searchValue.length > 2 ? endpoint + '/?name=' + searchValue : endpoint;
}
