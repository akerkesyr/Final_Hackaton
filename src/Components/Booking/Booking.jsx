import { Button, Link } from '@mui/material';
import React, { useState } from 'react';
import './Booking.css'
const Booking = () => {
    const [Name, setname] = useState("") ;
    const [Email, setemail] = useState("") ;
    const [cardNum, setcardNum] = useState(0) ;
    const [pinCard, setpinCard] = useState(0) ;
    function checkBook(e) {
        e.preventDefault()
        if(
            !Name.trim() ||
            !Email.trim() ||
            !cardNum.trim() ||
            !pinCard.trim() 
        ){
            alert("Fill in the fields");
            return
        }
    }
    let objectBook = {
        Name,
        Email,
        cardNum,
        pinCard
    }
    return (
        <div>
            <img className='img' src='https://www.nps.gov/brca/planyourvisit/images/Credit-Card-Logos.jpeg'>
            </img>
            <div className='booking__inputs'>
                <input type="text" placeholder='enter your name' ></input> 
                <input type="text" placeholder='enter your email'></input>
                <input type="text" placeholder='enter your card num'></input>
                <input type="text" placeholder='enter your pin of card'></input>
                <button className='btn' type="submit" onClick={()=>{checkBook()}}>
                    send
                </button>
                
            </div>
        </div>
    );
};

export default Booking;