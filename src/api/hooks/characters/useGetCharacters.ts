import useAxios, { ResponseValues } from 'axios-hooks';
import { baseUrl, Endpoint } from '../../../constants/endpoints';
import { useDebounce } from '../../../hooks/useDebounce';
import { CharactersResponse } from './types';

export const useGetCharacters = (
  searchValue: string,
  paginationUrl: string | null
): ResponseValues<CharactersResponse, unknown> => {
  const debounced = useDebounce(searchValue, 500);

  const [response] = useAxios<CharactersResponse>(
    paginationUrl || configureUrl(debounced),
    { useCache: false }
  );

  return response;
};

function configureUrl(searchValue: string) {
  const endpoint = baseUrl + Endpoint.CHARACTER;

  return searchValue.length > 2 ? endpoint + '/?name=' + searchValue : endpoint;
}
