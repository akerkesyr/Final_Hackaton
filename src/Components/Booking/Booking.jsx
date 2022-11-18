import React from 'react';
import './Booking.css'
const Booking = () => {
    return (
        <div>
            <img className='img' src='https://www.nps.gov/brca/planyourvisit/images/Credit-Card-Logos.jpeg'>
            </img>
            <div className='booking__inputs'>
                <input type="text" placeholder='enter your name' ></input> 
                <input type="text" placeholder='enter your email'></input>
                <input type="text" placeholder='enter your card num'></input>
                <input type="text" placeholder='enter your pin of card'></input>
                <button>
                    send
                </button>
            </div>
        </div>
    );
};

export default Booking;