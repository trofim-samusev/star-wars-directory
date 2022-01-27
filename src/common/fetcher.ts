import { Fetcher } from 'swr';

export const fetcher: Fetcher<any> = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());
