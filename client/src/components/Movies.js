import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = ({item}) => {
  const user = localStorage.getItem("user")
  return (
      <div className='card'>
      <p className='card_text'>{item.name}</p>
      <Link to={user ? `/${item.id}` : '/login'}>
      <img className='card_img' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='img'/>
      <div className='card_content'>
         <button className='btn'>Watch</button>
      </div>
      </Link>
    </div>
  ) 
}
