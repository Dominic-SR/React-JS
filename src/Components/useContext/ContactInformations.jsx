import React from 'react'

const ContactInformations = ({contactInformation}) => {
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