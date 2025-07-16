import React, {useEffect, useState} from "react"
const GithubUsers = () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async() =>{
        try{
            const response = await fetch('/api/users');
            const result = await response.json()
            setUsers(result)
            setLoading(false)
        }
        catch(err){
            console.log(err);
            setLoading(false)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
        fetchUsers()
        },3000)
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(!loading){
        return(
            <div className="container mt-5 w-50">
                <h2 className="fw-bold mb-4 text-center">Github Users</h2>
                <ul className="d-flex flex-wrap justify-content-around gap-5 list-inline">
                    {
                    users.map((user)=>{
                        const {id, avatar_url, login, html_url} = user;
                        return(<li key={id}>
                            <img height="200px" width="200px" src={avatar_url} alt={login} />
                            <p className="mt-4 fw-semibold fs-4">{login}</p>
                            <a className="btn btn-primary fw-bold" href={html_url} target="_blank">Profile</a>
                        </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default GithubUsers