import React,{useState} from 'react'

const Usestate = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='page-container'>
    <h1 className='title'>Hooks</h1>
    <h4 className='sub-title'>UseState</h4>
    <div className='box-wrapper'>
    <h4 className='sub-title'>Simple Counter</h4>
      <div className="row-section">
        <button className='primary-btn' onClick={()=>{setCount(count - 1)}}>-</button>
        <span className='content-text'>{count}</span>
        <button className='primary-btn' onClick={()=>{setCount(count + 1)}}>+</button>
      </div>
    </div>
    </div>

  )
}

export default Usestate