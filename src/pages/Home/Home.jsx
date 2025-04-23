import React from 'react'

const Home = () => {
  return (
    <div className='page-container'>
    <h1 className='title'>React JS</h1>
    <h4 className='sub-title'>Hooks</h4>
      <div className='box-container'>
        <a href='/usestate' className='box'>useState</a>
        <a className='box'>useEffect</a>
        <a className='box'>useContext</a>
        <a className='box'>useReducer</a>
        <a className='box'>useCallback</a>
        <a className='box'>useMemo</a>
        <a className='box'>useRef</a>
      </div>

      <a href='/pagination'>Pagination</a>
    </div>
    
  )
}

export default Home