import React, { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)
  return (
    <div className='container mt-5'>
        <h2 className='fw-bold'>Counter:{count}</h2>
        <div className='d-flex gap-2'>
        <button className='btn btn-primary' onClick={()=>setCount((prevState)=>prevState + 1)}>Increament</button>
        <button className='btn btn-primary' onClick={()=>setCount(count - 1)}>Decreament</button>
        <button className='btn btn-primary' onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter