import React, { useState } from 'react'

const WithoutTransition = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [list, setList] = useState(
    Array.from({length:20000},(_,i)=>`Item${i+1}`)
  )
  const [filteredList, setFilteredList] = useState(list)
  const handleSearch = (e) =>{
    const value = e.target.value;
    setSearchTerm(value)
    
    const filtered = list.filter((item)=>
        item.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredList(filtered)
  }

  return (
    <div className='container'>
      <h1>Without Transition</h1>

      <input 
      type='text'
      value={searchTerm}
      placeholder='Search...'
      onChange={handleSearch}
      />

      {filteredList.map((item,index)=>(
        <p key={index}>{item}</p>
      ))}

    </div>
  )
}

export default WithoutTransition