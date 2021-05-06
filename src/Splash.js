import React, { useState, useEffect } from 'react';
import './Splash.css';
import Scroll from './Scroll';
import Menu from './Menu';

function Splash({ image }) {
    const [mainImage, setMainImage] = useState(image);

    return (
        <>
            <header id="main">
                <Menu />
                <img src={mainImage}></img>

                <div className="text">
                    <h1>Hi,<br></br>I'm Jimmy Zheng!</h1>
                    <h3 className="mt-2">
                        <i>Full Stack Web Developer continuously improving <br></br> to reach new heights</i>
                    </h3>
                    <a href="#about" className="btn btn-outline-light rounded-0">About Me</a>
                    <h1><br></br>Site is still under construction!</h1>
                </div>

                <Scroll />
            </header>
        </>
    )
}


export default Splash;