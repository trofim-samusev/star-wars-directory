import { useContext } from 'react';
import { PeopleContext } from './PeopleContext';

export const usePeopleContext = () => {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error('You need to wrap PeopleContext.');
  }

  return context;
};
