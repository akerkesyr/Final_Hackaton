import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import { IconButton } from '@mui/material';
import { authContext } from '../../context/AuthContextProvider';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Navbar = () => {
  const {user,handleLogout}=useContext(authContext)
  return (
    <div className='nav__links'>
                <ul className='nav__ul'>
                  <img src='https://assets.stickpng.com/images/61362734f5966900044cbf74.png' width={50}>
                {/* <img style={{width:70}} src='https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg' width={70}> */}
                </img>
                    <Link style={{textDecoration:'none'}} to={'/productList'}>
                    <li className='nav__links1' id='English'>Tickets</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={"/"}>
                    <li className='nav__links1'>About us</li>
                    </Link>
                    <a style={{textDecoration:'none'}} href={"https://www.airbnb.com.mt/help?audience=guest"}> 
                    <li className='nav__links1'>Support</li>
                    </a>
                    <Link style={{textDecoration:'none'}} to="/auth">
                    <li className='nav__links1'>Log Out</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="/auth">
                    <li className='nav__links1'>Sign up</li>
                    </Link >
                    <Link style={{textDecoration:'none',display:"flex",justifyContent:"center", width:"100px"}}  to={'/liveSearch'}>
                    <IconButton>  
                    <li className='login'></li>
                    <SearchIcon/> 
                    </IconButton>
                    </Link>
                    <li onClick={()=>handleLogout()}>LogOut</li>
                      <Link style={{textDecoration:'none',display:"flex",justifyContent:"center", width:"100px"}} to="/basket">
                    <IconButton>
                      <ShoppingBagIcon/>
                    </IconButton>
                    </Link >
                    <li>{user.email}</li>
                </ul>
    </div>
  );
};

export default Navbar;