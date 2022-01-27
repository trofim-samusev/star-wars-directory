import { Person } from '../types';

export const getPersonId = (url: Person['url']) => {
  const [, id] = url.match(/https:\/\/swapi\.dev\/api\/people\/(\d+)\//) || [];

  return id;
};
