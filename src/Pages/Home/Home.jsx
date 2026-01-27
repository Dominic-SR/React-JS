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
  <li className="list-group-item bg-info text-light fw-bold text-center">REACT</li>
  {RoutesData.map((item,index)=>(
    
  <li className="list-group-item accordion-item" key={index}>
    
    <h2 className="accordion-header">
       <button 
      className="accordion-button collapsed" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target={`#collapse_${index}`}>
      {item.name}
      </button>
    </h2>
    
    <ul className="accordion list-group mt-2 accordion-flush accordion-collapse collapse" id={`collapse_${index}`}>
    {item.sub.map((itemSub,indexSub)=>(
      <li className="list-group-item ps-4 ccordion-header accordion-body" key={indexSub}>       
          <h2 className="accordion-header">
            <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#collapseSub_${indexSub}`} 
            >
            {itemSub.name}
            </button>
          </h2>

          {itemSub?.sub?.map((itemSubMenu,indexSubMenu)=>(
          <ul className={`accordion list-group mt-2 accordion-flush accordion-collapse collapse`} key={indexSubMenu} id={`collapseSub_${indexSub}`}>
            <li className="list-group-item ps-4" style={{cursor:"pointer"}} onClick={()=>toNavigate(itemSubMenu.to)}>{itemSubMenu.name}</li>
          </ul>))}
      </li>
      ))}
    </ul>
    
  </li>))}
</ul>
  )
}

export default Home