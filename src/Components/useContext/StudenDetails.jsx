import React from 'react'
import ContactInformations from './ContactInformations'

const StudenDetails = ({subjects, contactInformation}) => {
  return (
    <div className='card w-50'>
      <div className="card-body">
          <h4>Subjects</h4>
          <ul>
            {subjects.map((subject,index)=>(
              <li key={index}>{subject}</li>
            ))}
          </ul>

           <ContactInformations contactInformation={contactInformation} />
      </div>
    </div>
  )
}

export default StudenDetails