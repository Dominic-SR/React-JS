import React, { createContext } from 'react'
import { studentDate } from '../../assets/DataSet'
import StudenDetails from './StudenDetails'

export const StudentContaxt = createContext();

const Students = () => {
  return (
    <StudentContaxt.Provider value={studentDate}>
    <div className='container d-flex mt-5'>
        <div className='card w-50'>
            <div className='card-body'>
            <h4>Name</h4>
            <p>{studentDate.name}</p>
            <h4>Age</h4>
            <p>{studentDate.age}</p>
            <h4>Department</h4>
            <p>{studentDate.department}</p>
            </div>
        </div>
        <StudenDetails />
    </div>
    </StudentContaxt.Provider>
  )
}

export default Students