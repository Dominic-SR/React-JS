import React, { useState } from 'react'
import { data } from './../../assets/DataSet'

const Card = ({}) => {
const [products, setProducts] = useState(data)
const [product, setProduct] = useState("")
const [price, setPrice] = useState(0)

const handleAdd = () => {
    if(product!=="" && price!==0){ 
    setProducts((prevProd)=>{
       return [...prevProd, {id:products.length+1, name:product, Price:price}]
    }
    )
    setPrice(0)
    setProduct("")
    }else{
        alert("Please fill all input field !")
    }
}

const handleDelete = (id) =>{
    const updateProduct = products.filter((x)=>x.id != id);
    setProducts(updateProduct);
}

const handleDeleteAll = () =>{
    setProducts([])
}

const handleReset = () =>{
    setProducts(data);
}

  return (
    <div className='container mt-5'>

         <h3>Add a Product Using UseState()</h3>
         <div className='d-flex gap-2 align-items-center'>
        <input
            type="text"
            onChange={(e) => setProduct(e.target.value)}
            value={product}
            placeholder="Enter a Product Name"
        />

         <input
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter a Price"
            value={price}
        />

        <button onClick={handleAdd} className='btn btn-success btn-lg'>ADD</button> 

        </div>

        <h2 className='fw-bold'>Items in cart:{products.length}</h2>
        <div className='my-4'>
        {products.map((product)=>(
                <div className='d-flex gap-2 align-items-center' key={product.id}>
                    <p className='fs-4 fw-semibold my-3'>
                        {product.name}, <span className='text-success'>Rs {product.Price}</span>
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