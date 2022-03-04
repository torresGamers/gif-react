import React, { useState } from 'react'
import AddCategory from './componets/AddCategory';
import GifGrid from './componets/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd =()=>{
    //     setCategories((e)=>[...e,'Hunter'])
    // };

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}/>
    <hr/>

    <ol className='card-grid'>
        {
            categories.map((category,i) =>(
                <GifGrid 
                    key={i}
                    categories={category}
                />
            )    
            )
        }
    </ol>
    </>
  )
}
