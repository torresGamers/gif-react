import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({categories}) => {

    const {data,loading} = useFetchGifs(categories);
    // console.log(state)
    console.log(data)
    
    // const [images, setImages] = useState([])

    // useEffect(()=>{

    //     getGifs(categories)
    //     .then(setImages)

    //     // .then(imgs=>setImages(imgs))
    // },[categories]);

  return (
      <>
      <h3>{categories}</h3>

      {(loading) &&<p>Loading</p>}
      <div >
          {data.map(img=>{
              return (
                 <GifGridItem key={img.id} {...img}/>
              )
          })}
      
      </div>
      
          
     
      </>
  )
}

export default GifGrid