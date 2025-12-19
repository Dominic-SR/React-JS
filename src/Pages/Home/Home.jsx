import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RoutesData} from "../../Data/RoutesData"

const Home = () => {
const navigate = useNavigate()

  const toNavigate = (nav) =>{
      navigate(nav)
  }

  return (
  <ul className="list-group w-50 m-auto accordion">
  <li className="list-group-item bg-info text-light fw-bold">REACT CONCEPTS</li>
  {RoutesData.map((item,index)=>(
    
  <li className="list-group-item accordion-item">
    
    <h2 className="accordion-header">
       <button 
      className="accordion-button collapsed" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#collapseTwo" >
      {item.name}
      </button>
    </h2>
    <ul className="accordion list-group mt-2 accordion-flush accordion-collapse collapse" id="collapseTwo">
      {item.sub.map((itemSub,indexSub)=>(
      <li className="list-group-item ps-4 ccordion-header accordion-body">{itemSub.name}
          {itemSub?.sub?.map((itemSubMenu,indexSubMenu)=>(
          <ul className="list-group mt-2">
            <li className="list-group-item ps-4" onClick={()=>toNavigate("counter")}>{itemSubMenu.name}</li>
          </ul>))}
      </li>
      ))}
    </ul>
  </li>))}
</ul>
  )
}

export default Home