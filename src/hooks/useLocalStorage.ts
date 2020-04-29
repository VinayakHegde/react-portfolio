import { useState } from 'react';
import { ILocalStorage } from 'Models/ILocalStorage';

export default (props: ILocalStorage): [string, Function] => {
  const { key, initialValue } = props;
  if (!key) {
    throw Error('Key should not be empty');
  }
  const [item, setItem] = useState((): string => {
    try {
      const value = window.localStorage.getItem(key) || initialValue;
      return JSON.parse(value);
    } catch (error) {
      return initialValue;
    }
  });

  const setStoreItem = (value: string): void => {
    try {
      setItem(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      setItem(initialValue);
      window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
  };

  return [item, setStoreItem];
};
