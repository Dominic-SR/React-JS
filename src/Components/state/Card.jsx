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
  return (
    <div>
        <h1>Items in cart:{totalNoOfProduct}</h1>
        {products.map((product)=>{
            return(
                <div key={product.id}>
                    <p>
                        {product.name}, Rs{product.Price}
                    </p>
                    <button onClick={()=>handleDelete(product.id)}>Delete</button>
                </div>
            )
        })}
        <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}

export default Card