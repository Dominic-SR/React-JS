import React, { useState,useEffect } from 'react'

const TablePagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
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
    </>
  )
}

export default TablePagination