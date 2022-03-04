import React from 'react'

const GifGridItem = ({title,url}) => {
    
    // const {title,url}=img;
    // console.log(title)
    // console.log(title)
    // console.log(url)
   
    // const imgs = document.getElementById('images');
    // imgs.src=url;


  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem