import React, { useContext } from 'react'
import ContactInformations from './ContactInformations'
import { StudentContaxt } from './Students'

const StudenDetails = () => {
  const {subjects} = useContext(StudentContaxt)
  return (
    <div className='card w-50'>
      <div className="card-body">
          <h4>Subjects</h4>
          <ul>
            {subjects.map((subject,index)=>(
              <li key={index}>{subject}</li>
            ))}
          </ul>

           <ContactInformations />
      </div>
    </div>
  )
}

export default StudenDetails