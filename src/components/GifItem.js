import React from 'react'

export const GifItem = ({title,img_url}) => {

  return (
    <div className='card'>
        <img src={img_url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
