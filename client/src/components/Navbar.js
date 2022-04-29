import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import Netlix from '../assets/netflix.png'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  return (
    <div className='navbar'>
    <div className='container'>
      <div className='header_nav'>
      <Link to="/"><img src={Netlix} alt='netflix_img' className='navbar_icon'/></Link>
      {user ? (
        <div className='back_btn'>
          <p>{JSON.parse(user).name.toUpperCase()}</p>
          <button className='btn' onClick={() => {
            localStorage.clear()
            navigate('/login')
          }}>Выйти</button>
        </div>
        ): (
        <Link to="/login"><button className='btn navbar_button '>Войти</button></Link>
        )}
      </div>
    </div>
    </div>
  )
}


export default Navbar