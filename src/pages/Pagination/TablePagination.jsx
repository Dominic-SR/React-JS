import React, { useState,useEffect } from 'react'

const TablePagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    const fetchData =  async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const result =  await response.json();
        setData(result)
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    };

    fetchData()
  }, [])
  
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPost =  data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(data.length / postPerPage)
  const paginate = (page) =>{setCurrentPage(page)}


if(loading)return <p>Loading....</p>
  return (
    <>
      <h2>Pagination</h2>
      <ul>
        {currentPost.map((post)=>(
          <li key={post.id}>
              {post.id}-{post.title}
          </li>
        ))}
      </ul>



      <div className='pagination'>
          <button onClick={()=>paginate(1)}>First</button>
          <button disabled={currentPage === 1} onClick={()=>paginate(currentPage - 1)}>prev</button>
          {
            new Array(totalPages).fill(0).map((_,index)=>{
              return <button className={currentPage === index + 1 ? "active":""} onClick={()=>{paginate(index + 1)}} key={index + 1}>{index+1}</button>
            })
          }
          <button disabled={currentPage === totalPages} onClick={()=>paginate(currentPage + 1)}>Next</button>
          <button onClick={()=>paginate(totalPages)}>Last</button>
      </div>
    </>
  )
}

export default TablePagination