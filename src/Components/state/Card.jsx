import React, { useState } from 'react'
import { data } from './../../assets/DataSet'

const Card = () => {
const [totalNoOfProduct, setTotalNoOfProduct] = useState(data.length)
const [products, setProducts] = useState(data)

const handleDeleteAll = () =>[
    
]
  return (
    <div>
        <h1>Items in cart:{totalNoOfProduct}</h1>
        {products.map((product)=>{
            return(
                <div>
                    <p>
                        {product.name}, Rs{product.Price}
                    </p>
                    <button>Delete</button>
                </div>
            )
        })}
        <button>Delete All</button>
    </div>
  )
}

export default Card