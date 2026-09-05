import React,{useState, useEffect} from "react"
const Timer=()=>{
const [toggle,setToggle] = useState(false)
console.log("Parent Timer component initialize....");
    return(
        <div className="container mt-5">
            <button className="btn btn-primary btn-lg" onClick={()=>setToggle(!toggle)}>{toggle ? 'Stop' : 'Start'}</button>
            {toggle && <DemoComponent />}
        </div>
    )
}

export default Timer

const DemoComponent=()=>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("demo compnent....");

        const testOne = setInterval(()=>{
            console.log("Timer is running....");
            setCount(prevCount => prevCount + 1);
        },1000)

        // clearn up function is used to clean up the side effect when the component is unmounted or before the next effect runs. In this case, it clears the interval to prevent memory leaks and unnecessary function calls after the component is no longer in use.
        return ()=>{
            clearInterval(testOne);
            console.log("clean up function");
        }
        
    },[])
    return(<h3>Timer: {count}</h3>)
}