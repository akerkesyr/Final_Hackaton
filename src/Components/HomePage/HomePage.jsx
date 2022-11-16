import React from 'react';
import { Link } from 'react-router-dom';
import CardPage from '../CardPage/CardPage';
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <div>
            <h4 style={{display: "flex", textAlign:"center", alignItems:"center"}} className='homePage__h4'>
                MAKE THE IMPRESSION OF AIRBNB
            </h4>
            <h1 className='homePage__h1'>
                MAKE MONEY,
                MEETING PEOPLE
                WITH SMTH U LOVE
            </h1>
            <Link to={"/auth"}>
            <button
            id='homePage__button'>
                start
            </button>
            </Link>
        </div>
        <div>
            <video style={{marginTop: 40}} width="100%" height="560px" controls autoPlay src='https://stream.media.muscache.com/GLBXMO7wXoGpGzwi6QBynOiqpPONrVB2RQ5KCFSuIxM.mp4'>
            </video>
        </div>
        <CardPage/>
        </div>
    );
};

export default HomePage;