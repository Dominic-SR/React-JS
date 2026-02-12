import React, { useContext } from 'react'
import { StudentContaxt } from './Students';

const ContactInformations = () => {
    const {contactInformation} = useContext(StudentContaxt)
    const {phone, address} = contactInformation;
  return (
    <div>
        <h4>Contact Information</h4>
        <p>Phone No : {phone}</p>
        <p>Address : {address}</p>
    </div>
  )
}

export default ContactInformations