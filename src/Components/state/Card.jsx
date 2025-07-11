import React, { useState } from 'react'
import { data } from './../../assets/DataSet'

const Card = () => {
const [products, setProducts] = useState(data)
  return (
    <div>
        <h1>Items in cart:</h1>
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