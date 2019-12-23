import {useState} from 'react';

const useLocalStorage = ({key, initialValue}) => {
  const [item, setItem] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setStoreItem = value => {
    try {
      const itemToStore = value instanceof Function 
        ? value(item) 
        : value;
      setItem(itemToStore);
      window.localStorage.setItem(key, JSON.stringify(itemToStore));
    } catch (error) {
      new Error(`Error storing the route in local storage - ${error}`);
    }
  };

  return [item, setStoreItem];
};

export default useLocalStorage;