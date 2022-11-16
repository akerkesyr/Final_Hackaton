import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
import { IconButton } from '@mui/material';
const Navbar = () => {
  return (
    <div>
                <ul className='nav__links'>
                <img style={{width:70}} src='https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg' width={70}>
                </img>
                    <Link style={{textDecoration:'none'}} to={'/RroductsList'}>
                    <li className='nav__links1' id='English'>Tickets</li>
                    </Link>
                    <li className='nav__links1'>About us</li>
                    <a style={{textDecoration:'none'}} href={"https://www.airbnb.com.mt/help?audience=guest"}> 
                    <li className='nav__links1'>Support</li>
                    </a>
                    <Link style={{textDecoration:'none'}} to="/auth">
                    <li className='nav__links1'>Sign up</li>
                    </Link >
                    <Link to={'/liveSearch'}>
                    <IconButton>
                    <li className='login'></li>
                    <SearchIcon/> 
                    </IconButton>
                    </Link>
                    <li className='nav__links1'>USD$</li>
                </ul>
    </div>
  );
};

export default Navbar;