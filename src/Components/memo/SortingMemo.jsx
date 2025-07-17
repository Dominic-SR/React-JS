import React,{useState, useMemo} from 'react'

const SortingMemo = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [items, setItems] = useState([,4,3,2,4,5,1]);

    // Without Using Memory
    // const sortedItems = items.sort((a,b)=>{
    //     console.log("sorting item without memory");
    //     return sortOrder === 'asc' ?  a - b : b - a;
    // })

    const sortedItems = useMemo(()=>{
        console.log("sortingitems...");
        return items.slice().sort((a,b)=>{
            return sortOrder === 'asc' ? a - b : b - a; 
        })
    },[items, sortOrder])

  return (
    <div>
        <h1>Sorting Example (with UseMemo)</h1>
        {sortedItems.map((item,index)=>(
            <span key={index}>{item}</span>
        ))}

        <button onClick={()=>setSortOrder(sortOrder === 'asc' ? 'desc':'asc')}>
            Toggle sort order
        </button>
    </div>
  )
}

export default SortingMemo