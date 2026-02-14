import { useRef } from 'react';

const AutoFocusInput = () => {
  // 1. Initialize the ref container (starts empty)
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 3. Access the "current" property to talk to the real HTML element
    inputEl.current.focus();
  };

  return (
    <div className='container mt-5'>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default AutoFocusInput;