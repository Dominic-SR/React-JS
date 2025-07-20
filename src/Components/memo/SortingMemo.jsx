import React,{useState, useMemo} from 'react'

const SortingMemo = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [items, setItems] = useState([4,3,2,4,5,1]);

    // Without Using Memory
    // const sortedItems = items.sort((a,b)=>{
    //     console.log("sorting item without memory");
    //     return sortOrder === 'asc' ?  a - b : b - a;
    // })

    // With memo example 1
    // const sortedItems = useMemo(()=>{
    //     console.log("sortingitems...");
    //     return items.slice().sort((a,b)=>{
    //         return sortOrder === 'asc' ? a - b : b - a; 
    //     })
    // },[items, sortOrder])

    const reduceItems = useMemo(()=>{
        console.log("reducing.....",items);
         items.reduce((accmulator, currentVal)=>{
            const res = accmulator + currentVal;
            setItems(res)
        })
        
    },[])

  return (
    <div>
        <h1>Sorting Example (with UseMemo)</h1>
        {items.map((item,index)=>(
            <span key={index}>{item}</span>
        ))}

        <button onClick={()=>reduceItems(sortOrder === 'asc' ? 'desc':'asc')}>
            Toggle sort order
        </button>
    </div>
  )
}

export default SortingMemo