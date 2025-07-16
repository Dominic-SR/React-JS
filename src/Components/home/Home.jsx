import React,{useState} from 'react'
import Card from '../state/Card'

const Home = () => {
const [productName, setProductName] = useState("")
const [price, setPrice] = useState('')

  const handleAddtoCard = (e) =>{
    e.preventDefault();
    if(productName && price){
        const newProduct = {
            id : Date.now(),
            name:productName,
            price:price,
        }
        console.log(newProduct);
        setProductName('')
        setPrice('')
    }
  }

  return (
    <div className='container mt-5'>
        <h2>Add Product</h2>
        <form className='form w-50 d-flex gap-1 flex-column' onSubmit={handleAddtoCard}>
            <label className='mt-2' htmlFor="productName">Product Name</label>
            <input type="text" onChange={(e)=>setProductName(e.target.value)} value={productName}/>
            <label className='mt-2' htmlFor="price">Price</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
            <button className='btn btn-info mt-4' type='submit'>Add to card</button>
        </form>
        <Card />
    </div>
  )
}

export default Home