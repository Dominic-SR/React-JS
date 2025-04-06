import React,{useState} from 'react'

const Usestate = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='page-container'>
    <h1 className='title'>Hooks</h1>
    <h4 className='sub-title'>UseState</h4>
    <div className='box-container'>
      <div className="row-section">
        <span>{count}</span>
        <button onClick={()=>{setCount(count + 1)}}>+</button>
        <button onClick={()=>{setCount(count - 1)}}>-</button>
      </div>
    </div>
    </div>

  )
}

export default Usestate