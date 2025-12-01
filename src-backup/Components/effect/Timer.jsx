import React,{useState, useEffect} from "react"
const Timer=()=>{
const [toggle,setToggle] = useState(false)
    return(
        <div className="container mt-5">
            <button className="btn btn-primary btn-lg" onClick={()=>setToggle(!toggle)}>Click Me</button>
            {toggle && <DemoComponent />}
        </div>
    )
}

export default Timer

const DemoComponent=()=>{
    useEffect(()=>{
        console.log("demo compnent");

        const testOne = setInterval(()=>{
            console.log("testtt");
        },1000)

        return ()=>{
            clearInterval(testOne);
            console.log("clean up function");
        }
        
    },[])
    return(<h3>I am from demo component</h3>)
}