import React,{useState, useEffect, useCallback} from "react";
const ButtonClickCounter = () =>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // const handleClick = () =>{
    //     setCount((prev)=>prev + 1)
    // }

    const handleClick = useCallback(()=>{
        setCount((prev)=> prev+ 1);
    },[])

    useEffect(()=>{
        console.log("handle click function reffence changed!");
    },[handleClick])

    return(
    <div className="container mt-5">
        <div className="container">
        <h2 className="fw-bold">Use Callback Hooks:</h2>
        <h3>count: {count}</h3>
        <button className="btn btn-primary" onClick={handleClick}>Increament Count</button>
        </div>

        <div className="container mt-4 mb-4">
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="type something" />
        <p className="fw-bold mt-2">Text: {text}</p>
        </div>
    </div>
    )
}
export default ButtonClickCounter;