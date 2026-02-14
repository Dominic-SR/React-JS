import React,{useState, useEffect} from 'react'

const UseEffectExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = () =>{
    setCount1((prev)=>(prev + 1))
  }

  const handleIncrement2 = () =>{
    setCount2((prev)=>(prev + 1))
  }

  useEffect(()=>{
    console.log("component 1");
  },[count1])

  useEffect(()=>{
    console.log("component 2");
  },[count2])
  
  return (
    <div className='container mt-5'>
        <h2 className='fw-bold'>Counter {count1}</h2>
        <button className='btn btn-primary' onClick={handleIncrement1}>Button 1</button>
        <h2 className='fw-bold'>Counter {count2}</h2>
        <button className='btn btn-primary' onClick={handleIncrement2}>Button 2</button>
    </div>
  )
}

export default UseEffectExample