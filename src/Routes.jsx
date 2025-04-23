import React from 'react'
import { BrowserRouter, Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Usestate from './pages/Hooks/Usestate/UseState'
import TablePagination from './pages/Pagination/TablePagination'

const AppRoutes = () => {
  return (
      <BrowserRouter>
      <main className='main-container'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/usestate" element={ <Usestate/> } />
        <Route path="/pagination" element={ <TablePagination/> } />
      </Routes>
      </main>
      </BrowserRouter>
      )
}

export default AppRoutes