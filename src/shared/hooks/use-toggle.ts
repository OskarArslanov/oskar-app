import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((state) => !state);

  return [state, toggle, setState] as const;
};
