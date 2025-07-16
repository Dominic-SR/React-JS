import React, { useState } from 'react'
import { data } from './../../assets/DataSet'

const Card = () => {
const [totalNoOfProduct, setTotalNoOfProduct] = useState(data.length)
const [products, setProducts] = useState(data)

const handleDelete = (id) =>{
    const updateProduct = products.filter((x)=>x.id != id);
    setProducts(updateProduct);
    setTotalNoOfProduct(updateProduct.length)
}

const handleDeleteAll = () =>{
    setProducts([])
    setTotalNoOfProduct(0)
}

const handleReset = () =>{
    setProducts(data);
    setTotalNoOfProduct(data.length)
}

  return (
    <div className='container mt-5'>
        <h2 className='fw-bold'>Items in cart:{totalNoOfProduct}</h2>
        <div className='my-4'>
        {products.map((product)=>(
                <div className='d-flex gap-2 align-items-center' key={product.id}>
                    <p className='fw-semibold my-3'>
                        {product.name}, Rs{product.Price}
                    </p>
                    <button className='btn btn-danger' onClick={()=>handleDelete(product.id)}>Delete</button>
                </div>
            )
        )}
        </div>
        <div className='d-flex gap-2'>
            <button onClick={handleDeleteAll} className='btn btn-danger btn-lg'>Delete All</button>
            <button onClick={handleReset} className='btn btn-info btn-lg'>Reset</button> 
        </div>
    </div>
  )
}

export default Card