import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoImage from './logosite.png'
const Navbar = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')

  }
  
  return (
    <div className='nav-body'>
      <img className='logo'
          alt='logo'
          src={logoImage} />
      {auth ?
        <ul className='Navbar-ul'>
          
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
        </ul> :

        <ul className='Navbar-ul login'>
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        </ul>

      }
    </div >
  )
}

export default Navbar;