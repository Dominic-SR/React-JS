import React,{useState,useEffect, useRef} from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refContainer = useRef(null);

  useEffect(()=>{
    console.log(refContainer)
    console.log(password)
    
  })

  const handleLogin = (e) =>{
    e.preventDefault();
    const emailAddress = refContainer.current.value;
    console.log({email:emailAddress,password:password});
    setEmail("")
    setPassword("")
    refContainer.current.value='';
  }

  const [count, setCount] = useState(0)
  const isInitialRender = useRef(true)

  useEffect(()=>{
     if(isInitialRender.current){
        isInitialRender.current = false;
        return;
     }
     console.log("useeffect ran because count changed", count);
  },[count])

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="row">
    <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={refContainer} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    <div className="container-fluid">
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
    </div>
</div>
</div>
  )
}

export default LoginForm