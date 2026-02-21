import React, { useState, useCallback } from 'react';

// Memoized child component
const ExpensiveChild = React.memo(({ onChange }) => {
  console.log("Child rendered!");
  return <button onClick={onChange}>Increment Count</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // WRAPPED IN USECALLBACK
  // This function is now "stable" and won't change unless [setCount] changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <ExpensiveChild onChange={increment} />
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here to re-render Parent"
      />
    </div>
  );
}