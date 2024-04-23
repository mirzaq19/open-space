import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    console.log('target', target.value);
    setValue(target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;
