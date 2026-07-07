import React from 'react'

const CleanUpFunction = () => {
  const [toggle, setToggle] = React.useState(true)
  
  return (
    <div>
      <p>CleanUpFunction</p>
      <button onClick={()=>setToggle(!toggle)}>Show/Hide CompA</button>
    </div>
  )
}

export default CleanUpFunction