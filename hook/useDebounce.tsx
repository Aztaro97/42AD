import { useEffect, useState } from "react";

const seDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debounceValue;
};

export default seDebounce;
