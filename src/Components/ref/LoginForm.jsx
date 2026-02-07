import React,{useEffect} from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault();
    setEmail("")
    setPassword("")
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="row">
    <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} />
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
</div>
</div>
  )
}

export default LoginForm