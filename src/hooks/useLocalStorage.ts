import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: string) {
  // getting stored value
  const saved = localStorage.getItem(key);
  if (saved === null) return defaultValue;
  const initial = JSON.parse(saved);
  return initial;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
